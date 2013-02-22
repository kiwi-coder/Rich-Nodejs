var vows = require('vows'),
    assert = require('assert');

var Player = require('../../lib/player').Player;
var MineSiteController = require('../../lib/site-controller').MineSiteController;
var sinon = require('sinon');

vows.describe('MineSiteController').addBatch({
    'player receive 100 bonus points':function () {
        var player = new Player(0);
        player.setPoints(0);

        var mineSite = new MineSiteController(100);
        var mockCallback = sinon.mock();
        mockCallback.once();

        mineSite.acceptPlayer(player, mockCallback);

        assert.equal(player.getPoints(), 100);
        mockCallback.verify();
    },

    'display $':function () {
        var mineSite = new MineSiteController(100);

        assert.equal(mineSite.display(), '$');
    }
}).export(module);
