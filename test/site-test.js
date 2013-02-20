var vows = require('vows'),
    assert = require('assert');

var Site = require('../lib/site').Site;
var Player = require('../lib/player').Player;
var DummySiteController = require('./dummy-site-controller').DummySiteController;

vows.describe('Site').addBatch({
    'display':{
        topic:new Site(new DummySiteController()),

        'should display 0 when no player is here':function (site) {
            assert.equal(site.display(), '0');
        },

        'has a player':{
            topic:function (site) {
                var player = new Player(0);
                player.setName('ATuBo');
                site.addPlayer(player);
                return site;
            },

            'should display player when there':function (site) {
                assert.equal(site.display(), 'A');
            }
        }
    },

    'A player stop at this site':{
        'should call dummy site handle accept player':function () {
            var dummySite = new DummySiteController();
            var called = false;
            dummySite.acceptPlayer = function() {
                called = true;
            }
            var site = new Site(dummySite);

            var player = new Player(0);
            site.acceptPlayer(player);

            assert.isTrue(called);
        }
    }
}).
    export(module);