
//
// Chat
//

var Web = require('./services/web'),
    Socket = require('./services/socket');

function Chat(settings) {
    this.settings = settings;
}

Chat.prototype.start = function() {
    this.services = {
        web: new Web(),
        socket: new Socket()
    }
    this.services.web.start();
    this.services.socket.start();
};

module.exports = Chat;