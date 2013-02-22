exports.RollCommand = require('./command/roll-command').RollCommand;
exports.SellCommand = require('./command/sell-command').SellCommand;
exports.QuitCommand = require('./command/quit-command').QuitCommand;
exports.HelpCommand = require('./command/help-command').HelpCommand;
exports.QueryCommand = require('./command/query-command').QueryCommand;

function capital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function fullCommandName(str) {
    return capital(str) + 'Command';
}

exports.commandParser = {
    parse:function (player, input) {
        var args = input.split(' ');
        var commandName = fullCommandName(args[0]);
        if (typeof exports[commandName] == 'undefined') {
            commandName = 'HelpCommand';
        }
        if (typeof args[1] == 'undefined') {
            return new exports[commandName](player);
        } else {
            return new exports[commandName](player, args[1]);
        }
    }
}

