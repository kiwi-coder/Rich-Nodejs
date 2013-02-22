exports.RollCommand = require('./command/roll-command').RollCommand;
exports.SellCommand = require('./command/sell-command').SellCommand;
exports.QuitCommand = require('./command/quit-command').QuitCommand;

function capital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function fullCommandName(str) {
    return capital(str) + 'Command';
}

exports.commandParser = {
    parse:function (player, input, callback) {
        var firstArg = input.split(' ')[0];
        var secondArg = input.split(' ')[1];
        if (typeof secondArg == 'undefined') {
            return new exports[fullCommandName(firstArg)](player, callback);
        } else {
            return new exports[fullCommandName(firstArg)](player, secondArg, callback);
        }
    }
}

