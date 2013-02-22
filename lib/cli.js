var readline = require('readline');

var cli = {
    rl:readline.createInterface(process.stdin, process.stdout),

    onYes:function (message, callback) {
        this.rl.question(message, function (input) {
            if (input.toString().trim().toUpperCase() == 'Y') {
                callback();
            }
        });
    },

    prompt:function (message, callback) {
        this.rl.prompt(message, callback);
    },

    question:function (message, callback) {
        this.rl.question(message, callback);
    },

    questionln:function (message, callback) {
        cli.question(message + '\n', callback);
    },

    repeatQuestion:function (message, callback) {
        var msg = message + "\n";
        this.rl.question(msg, function (input) {
            try {
                callback(input);
            } catch (error) {
                console.error(error.message);
                cli.repeatQuestion(msg, callback);
            }
        });
    }
};

exports.cli = cli;