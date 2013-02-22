var vows = require('vows'),
    assert = require('assert');

var parser = require('../lib/command-parser');
var commandParser = parser.commandParser;
var RollCommand = parser.RollCommand;
var SellCommand = parser.SellCommand;
var QuitCommand = parser.QuitCommand;

var dummyPlayer = {};
var dummyCallback = {};

vows.describe('CommandParser').addBatch({
    'roll':function () {
        assert.isTrue(commandParser.parse(dummyPlayer, 'roll', dummyCallback) instanceof  RollCommand);
    },

    'sell 3':function () {
        assert.isTrue(commandParser.parse(dummyPlayer, 'sell 3', dummyCallback) instanceof SellCommand);
    },

    'quit':function() {
        assert.isTrue(commandParser.parse(dummyPlayer, 'quit', dummyCallback) instanceof QuitCommand);
    }
}).export(module);