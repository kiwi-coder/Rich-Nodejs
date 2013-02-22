var vows = require('vows'),
    assert = require('assert');

var parser = require('../lib/command-parser');
var commandParser = parser.commandParser;
var RollCommand = parser.RollCommand;
var SellCommand = parser.SellCommand;
var QuitCommand = parser.QuitCommand;
var HelpCommand = parser.HelpCommand;

var dummyPlayer = {};
var dummyCallback = {};

vows.describe('CommandParser').addBatch({
    'roll':function () {
        assert.isTrue(commandParser.parse(dummyPlayer, 'roll') instanceof  RollCommand);
    },

    'sell 3':function () {
        assert.isTrue(commandParser.parse(dummyPlayer, 'sell 3') instanceof SellCommand);
    },

    'quit':function () {
        assert.isTrue(commandParser.parse(dummyPlayer, 'quit') instanceof QuitCommand);
    },

    'should return help for invalid input':function () {
        assert.isTrue(commandParser.parse(dummyCallback, 'invalid input') instanceof HelpCommand);
    }
}).export(module);