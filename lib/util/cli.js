var fs = require('fs');

function CLI() {
    this.readSync = function () {
        process.stdin.pause();
        var response = fs.readSync(process.stdin.fd, 1000, 0, "utf8");
        process.stdin.resume();
        return response[0].trim();
    }

    this.question = function (message) {
        return this.prompt(message + "\n");
    }

    this.prompt = function (message) {
        process.stdout.write(message);
        return this.readSync();
    }

//    this.repeatQuestion = function (message) {
//        try {
//            return this.question(message);
//        } catch (error) {
//            console.error(error.message);
//            return this.repeatQuestion(message);
//        }
//    }
}

exports.CLI = CLI;