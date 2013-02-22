var vows = require('vows'),
    assert = require('assert');

var SellCommand = require('../../lib/command/sell-command').SellCommand;
var Player = require('../../lib/player').Player;
var sinon = require('sinon');

vows.describe('SellToolCommand').addBatch({
    'sell house at index':function () {
        var player = new Player(0);

        var mockPlayer = sinon.mock(player);
        var houseIndex = 1;

        mockPlayer.expects('sellHouseAtIndex').once().withArgs(houseIndex);

        new SellCommand(player, houseIndex, {}).execute();

        mockPlayer.verify();
    }
}).export(module);