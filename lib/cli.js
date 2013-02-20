var readline = require('readline');

var cli = {
    rl:readline.createInterface(process.stdin, process.stdout),

    onYes:function (message, callback) {
        this.rl.question(message, function (input) {
            if (input.toString().trim().toUpperCase() == 'Y') {
                callback();
            }
        });
    }
};

exports.cli = cli;