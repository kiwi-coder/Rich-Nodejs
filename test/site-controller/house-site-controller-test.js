var vows = require('vows'),
    assert = require('assert'),
    events = require('events');

var HouseSiteController = require('../../lib/site-controller').HouseSiteController;
var Player = require('../../lib/player').Player;
var House = require('../../lib/house').House;
var sinon = require('sinon');
var cli = require('../../lib/cli').cli;

vows.describe('HouseSiteController').addBatch({
    'house without owner':{
        'notice player buy house':function () {
            var mock = sinon.mock(cli);
            mock.expects('onYes').once().withArgs("是否购买该处空地，100元(Y/N)?");

            var player = new Player(10000);
            var houseSite = new HouseSiteController(new House(100), cli);

            houseSite.acceptPlayer(player);

            mock.verify();
        },

        'player want to buy house':function () {
            var player = new Player(10000);
            var house = new House(100);

            cli.onYes = function (message, cb) {
                cb();
            };

            var houseSite = new HouseSiteController(house, cli);

            var mock = sinon.mock(player);
            mock.expects('buyHouse').once().withArgs(house);

            houseSite.acceptPlayer(player);

            mock.verify();
        }
    },

    'house with owner':{
        'notice player upgrade house':function () {
            var mock = sinon.mock(cli);
            mock.expects('onYes').once().withArgs("是否升级该处地产，100元(Y/N)?");

            var owner = new Player(10000);
            const house = new House(100);
            house.setOwner(owner);
            var houseSite = new HouseSiteController(house, cli);

            houseSite.acceptPlayer(owner);

            mock.verify();
        },

        'player upgrade house':function () {
            var owner = new Player(10000);
            const house = new House(100);
            house.setOwner(owner);

            cli.onYes = function (message, cb) {
                cb();
            };

            var mock = sinon.mock(owner);
            mock.expects('upgradeHouse').once().withArgs(house);

            var houseSite = new HouseSiteController(house, cli);
            houseSite.acceptPlayer(owner);

            mock.verify();
        },

        'comes a visitor':function () {
            var owner = new Player(1000);
            const house = new House(100);
            house.setOwner(owner);
            var visitor = new Player();

            var mock = sinon.mock(visitor);
            mock.expects('payToll').once().withArgs(house);

            var houseSite = new HouseSiteController(house, {});
            houseSite.acceptPlayer(visitor);

            mock.verify();
        }
    }
}).export(module);