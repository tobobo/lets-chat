push = require('pushover-notifications');

var models = {
    user: require('./user.js'),
    message: require('./message.js'),
    file: require('./file.js'),
    room: require('./room.js'),
}

// notify users!

models.message.schema.pre('save', function (done) {
    mentionMatches = this.text.match(/@[^\W]*/g);
    if (!!mentionMatches && mentionMatches.length > 0) {
      mentionedUsernames = !mentionMatches ? [] : mentionMatches.map(function(userNameWithAt) {
        return userNameWithAt.slice(1)
      });
      mentionedUserRegExps = mentionedUsernames.map(function(userName) {
        return new RegExp(userName.toLowerCase().replace(/\W/g, '').split('').join('\\W*'), 'i');
      });
      searchObjs = mentionedUserRegExps.map(function(regExp) {
        return {displayName: {$regex: regExp}}
      });
      message = this
      roomName = ''
      userName = ''

      models.user.findById(message.owner).exec().then(function(owner) {
        userName = owner.displayName;
        return models.room.findById(message.room).exec();
      }).then(function(room) {
        roomName = room.name;
        console.log('here');
        return models.user.find().or(searchObjs).exec();
      }).then(function (users) {

        if (!!users) for (var i = 0; i < users.length; i++) {
          if (!!users[i].pushoverKey) {
            console.log ('creating message');
            var p = new push({
              user: users[i].pushoverKey,
              token: process.env.MPI_CHAT_PUSHOVER_TOKEN
            });

            var msg = {
              title: userName + " mentioned you in " + roomName,
              message: message.text
            }

            p.send(msg, function(error, result) {
              if (error) {
                throw error;
              }
            });              
          }

        }


      });      
    }

    done();
});


module.exports = models;
