var vows = require('vows'),
    assert = require('assert');
var Player = require('../lib/player').Player;
var MineSite = require('../lib/mine-site').MineSite;

vows.describe('receive bonus points').addBatch({
    'player receive 100 bonus points': function() {
        var player= new Player(0);
        player.setPoints(0);

        var mineSite = new MineSite(100);

        mineSite.acceptPlayer(player);

        assert.equal(player.getPoints(), 100);
    }
}).export(module);