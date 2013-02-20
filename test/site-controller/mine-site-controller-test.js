var vows = require('vows'),
    assert = require('assert');
var Player = require('../../lib/player').Player;
var MineSiteController = require('../../lib/site-controller').MineSiteController;

vows.describe('receive bonus points').addBatch({
    'player receive 100 bonus points':function () {
        var player = new Player(0);
        player.setPoints(0);

        var mineSite = new MineSiteController(100);

        mineSite.acceptPlayer(player);

        assert.equal(player.getPoints(), 100);
    }
}).export(module);

vows.describe('display $').addBatch({
    'display $ when nobody is here':function () {
        var mineSite = new MineSiteController(100);

        assert.equal(mineSite.display(), '$');
    }
}).export(module);