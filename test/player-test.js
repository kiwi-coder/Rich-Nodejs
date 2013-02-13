var vows = require('vows'),
    assert = require('assert');

var Player = require('../lib/player').Player;
var BlockTool = require('../lib/tool').BlockTool;
var RobotTool = require('../lib/tool').RobotTool;
var BombTool = require('../lib/tool').BombTool;

vows.describe('player buy tool').addBatch({
    'player can buy another tool if points is enough':function () {
        var player = new Player(0);
        player.setPoints(100);

        player.buyTool(new BombTool());

        assert.equal(player.getAllToolCount(), 1);
        assert.equal(player.getPoints(), 50);
    },

    'player cannot buy another tool if he has already 10 tools':function () {
        var player = new Player(0);
        player.setPoints(100);
        for (var i = 1; i <= 10; i++) player.addTool(new BombTool());


        assert.throws(function () {
            player.buyTool(new BombTool());
        }, Error);
    },

    'player cannot buy another tool if he do not have enough points':function () {
        var player = new Player(0);
        player.setPoints(10);

        assert.throws(function () {
            player.buyTool(new BombTool());
        }, Error);
    }
}).export(module);


vows.describe('count tools').addBatch({
    'player has has 3 RobotTool':function () {
        var player = new Player(0);
        for (var i = 1; i <= 4; i++) player.addTool(new BlockTool())
        for (var i = 1; i <= 3; i++) player.addTool(new RobotTool());
        for (var i = 1; i <= 2; i++) player.addTool(new BombTool());

        assert.equal(player.getSpecificToolCount(new RobotTool()), 3);
    }
}).export(module);

vows.describe('sell tools').addBatch({
    'player sell tool if has such kind of tool':function () {
        var player = new Player(0);
        player.addTool(new BombTool());

        player.sellTool(new BombTool());

        assert.equal(player.getAllToolCount(), 0);
        assert.equal(player.getPoints(), 50);
    },

    'player cannot sell tool if has not such kind of tool':function () {
        var player = new Player(0);

        assert.throws(function () {
            player.sellTool(new BombTool());
        }, Error);
    }
}).export(module);