
//
// Web Service
//

function Web (settings) {
    this.settings = settings;
}

Web.prototype.start = function() {
    console.log('Started Web Service...')
};

module.exports = Web;