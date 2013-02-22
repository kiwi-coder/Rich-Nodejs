var vows = require('vows'),
    assert = require('assert'),
    events = require('events');

var HouseSiteController = require('../../lib/site-controller').HouseSiteController;
var Player = require('../../lib/player').Player;
var House = require('../../lib/house').House;
var sinon = require('sinon');
var cli = require('../../lib/cli').cli;

vows.describe('HouseSiteController').addBatch({
    'handle player buy house':{
        'notice player buy house':function () {
            var mock = sinon.mock(cli);
            mock.expects('questionln').once().withArgs("是否购买该处空地，100元(Y/N)?");

            var player = new Player(10000);
            var houseSite = new HouseSiteController(new House(100));

            houseSite.handleBuyHouse(player, function () {
            });

            mock.verify();
        },

        'player want to buy house':function () {
            var player = new Player(10000);
            var house = new House(100);

            cli.questionln = function (message, cb) {
                cb('Y');
            };

            var houseSite = new HouseSiteController(house);

            var mock = sinon.mock(player);
            mock.expects('buyHouse').once().withArgs(house);

            houseSite.handleBuyHouse(player, function () {
            });

            mock.verify();
        },


        'player want to buy house':function () {
            var player = new Player(10000);
            var house = new House(100);

            cli.questionln = function (message, cb) {
                cb('N');
            };

            var houseSite = new HouseSiteController(house);

            var mock = sinon.mock(player);
            mock.expects('buyHouse').never();

            houseSite.handleBuyHouse(player, function () {
            });

            mock.verify();
        }
    },

    'house with owner':{
        'notice player upgrade house':function () {
            var mock = sinon.mock(cli);
            mock.expects('questionln').once().withArgs("是否升级该处地产，100元(Y/N)?");

            var owner = new Player(10000);
            const house = new House(100);
            house.setOwner(owner);
            var houseSite = new HouseSiteController(house);

            houseSite.handleUpgradeHouse(owner, function () {
            });

            mock.verify();
        },

        'player upgrade house':function () {
            var owner = new Player(10000);
            const house = new House(100);
            house.setOwner(owner);

            cli.questionln = function (message, cb) {
                cb('Y');
            };

            var mock = sinon.mock(owner);
            mock.expects('upgradeHouse').once().withArgs(house);

            var houseSite = new HouseSiteController(house);
            houseSite.handleUpgradeHouse(owner, function () {
            });

            mock.verify();
        },

        'comes a visitor':function () {
            var owner = new Player(1000);
            const house = new House(100);
            house.setOwner(owner);
            var visitor = new Player();

            var mock = sinon.mock(visitor);
            mock.expects('payToll').once().withArgs(house);

            var houseSite = new HouseSiteController(house);
            houseSite.acceptPlayer(visitor, function () {
            });

            mock.verify();
        }
    }
}).export(module);