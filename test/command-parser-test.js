var vows = require('vows'),
    assert = require('assert');

var parser = require('../lib/command-parser');
var commandParser = parser.commandParser;

var dummyPlayer = {};
var dummyCallback = {};

vows.describe('CommandParser').addBatch({
    'roll':function () {
        assert.isTrue(commandParser.parse(dummyPlayer, 'roll') instanceof  parser.RollCommand);
    },

    'sell 3':function () {
        assert.isTrue(commandParser.parse(dummyPlayer, 'sell 3') instanceof parser.SellCommand);
    },

    'quit':function () {
        assert.isTrue(commandParser.parse(dummyPlayer, 'quit') instanceof parser.QuitCommand);
    },

    'roll':function() {
        assert.isTrue(commandParser.parse(dummyPlayer, 'query') instanceof parser.QueryCommand);
    }

    'should return help for invalid input':function () {
        assert.isTrue(commandParser.parse(dummyCallback, 'invalid input') instanceof parser.HelpCommand);
    }
}).export(module);