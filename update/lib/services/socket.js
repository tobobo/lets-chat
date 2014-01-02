
//
// Socket Service
//

function Socket (settings) {
    this.settings = settings;
}

Socket.prototype.start = function() {
    console.log('Started Socket Service...')
};

module.exports = Socket;