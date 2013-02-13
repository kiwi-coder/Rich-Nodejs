var vows = require('vows'),
    assert = require('assert');

var BlockTool = require('../lib/tool').BlockTool
var RobotTool = require('../lib/tool').RobotTool
var BombTool = require('../lib/tool').BombTool

vows.describe('block tool').addBatch({
    'points is 50':function () {
        assert.equal(new BlockTool().points, 50);
    },

    'symbol is #':function () {
        assert.equal(new BlockTool().symbol, '#');
    }
}).export(module);

vows.describe('robot tool').addBatch({
    'points is 30':function () {
        assert.equal(new RobotTool().points, 30);
    },

    'symbol is space':function () {
        assert.equal(new RobotTool().symbol, ' ');
    }
}).export(module);

vows.describe('bomb tool').addBatch({
    'points is 50':function () {
        assert.equal(new BombTool().points, 50);
    },

    'symbol is @':function () {
        assert.equal(new BombTool().points, '@');
    }
});