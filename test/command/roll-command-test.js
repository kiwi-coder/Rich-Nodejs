var vows = require('vows'),
    assert = require('assert');

var RollCommand = require('../../lib/command/roll-command').RollCommand;
var Player = require('../../lib/player').Player;
var sinon = require('sinon');

vows.describe('RollCommand').addBatch({
    'execute to move forward':function () {
        var player = new Player(0);

        var mockPlayer = sinon.mock(player);
        mockPlayer.expects('roll').once();

        new RollCommand(player).execute();

        mockPlayer.verify();
    }
}).export(module);