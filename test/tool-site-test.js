var vows = require('vows'),
    assert = require('assert');

var ToolSite = require('../lib/tool-site').ToolSite;
var Player = require('../lib/player').Player;
var Tool = require('../lib/tool').Tool;

vows.describe('display').addBatch({
    'tool site should display T':function () {
        var toolSite = new ToolSite();

        assert.equal(toolSite.display(), 'T');
    }
}).export(module);

vows.describe('notice').addBatch({
    'display notice message':function () {
        var toolSite = new ToolSite();
        var player = new Player(0);
        player.setPoints(1000);

        var consoleLogCalled = false;
        console.log = function (str) {
            assert.equal(str, "欢迎光临道具屋， 请选择您所需要的道具：");
            consoleLogCalled = true;
        }

        toolSite.acceptPlayer(player);

        assert.isTrue(consoleLogCalled);
    }
}).export(module);

vows.describe('buy tool').addBatch({
    'buy block tool':function () {
        var ev = new vows.options.Emitter();
        process.openStdin = function () {
            return ev;
        };

        var player = new Player(0);
        player.setPoints(100);
        var toolSite = new ToolSite();

        console.log = function (str) {
        };

        toolSite.acceptPlayer(player);
        ev.emit('data', '1');
    },

    'player do not have enough points to buy tool':function () {
        var ev = new vows.options.Emitter();
        process.openStdin = function () {
            return ev;
        };

        var player = new Player(0);
        player.setPoints(40);
        var toolSite = new ToolSite();

        console.log = function (str) {
        };

        console.error = function(str) {
            assert.equal(str, "您当前剩余的点数为40， 不足以购买路障道具。");
        };

        toolSite.acceptPlayer(player);
        ev.emit('data', '1');
    }
}).export(module);