var vows = require('vows'),
    assert = require('assert');

var SellToolCommand = require('../../lib/command/sell-tool-command').SellToolCommand;
var Player = require('../../lib/player').Player;
var sinon = require('sinon');

vows.describe('SellHouseCommand').addBatch({
    'sell tool':function () {
        var player = new Player(0);

        var mockPlayer = sinon.mock(player);
        var toolIndex = 1;

        mockPlayer.expects('sellTool').once();

        new SellToolCommand(player, toolIndex, {}).execute();

        mockPlayer.verify();
    }
}).export(module);