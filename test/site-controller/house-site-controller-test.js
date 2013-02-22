var vows = require('vows'),
    assert = require('assert'),
    events = require('events');

var HouseSiteController = require('../../lib/site-controller').HouseSiteController;
var Player = require('../../lib/player').Player;
var House = require('../../lib/house').House;
var sinon = require('sinon');
var CLI = require('../../lib/cli').CLI;

vows.describe('HouseSiteController').addBatch({
    'handle buy house':{
        'player want to buy house':function () {
            var player = new Player(10000);
            var house = new House(100);

            var cli = new CLI();
            var cliStub = sinon.stub(cli, "question").withArgs("是否购买该处空地，100元(Y/N)?").returns('Y');
            var houseSite = new HouseSiteController(house, cli);

            var playerMock = sinon.mock(player);
            playerMock.expects('buyHouse').once().withArgs(house);

            houseSite.handleBuyHouse(player);

            playerMock.verify();
            sinon.assert.calledOnce(cliStub);
        },

        'player do not to buy house':function () {
            var player = new Player(10000);
            var house = new House(100);

            var cli = new CLI();
            var cliStub = sinon.stub(cli, "question").withArgs("是否购买该处空地，100元(Y/N)?").returns('N');
            var houseSite = new HouseSiteController(house, cli);

            var playerMock = sinon.mock(player);
            playerMock.expects('buyHouse').never();

            houseSite.handleBuyHouse(player);

            playerMock.verify();
            sinon.assert.calledOnce(cliStub);
        }
    },

    'handle upgrade house':{
        'player want to upgrade house':function () {
            var owner = new Player(10000);
            var house = new House(100);
            house.setOwner(owner);

            var cli = new CLI();
            var cliStub = sinon.stub(cli, "question").withArgs("是否升级该处地产，100元(Y/N)?").returns('Y');
            var houseSite = new HouseSiteController(house, cli);

            var playerMock = sinon.mock(owner);
            playerMock.expects('upgradeHouse').once().withArgs(house);

            houseSite.handleUpgradeHouse(owner);

            playerMock.verify();
            sinon.assert.calledOnce(cliStub);
        },


        'player do not want to upgrade house':function () {
            var owner = new Player(10000);
            var house = new House(100);
            house.setOwner(owner);

            var cli = new CLI();
            var cliStub = sinon.stub(cli, "question").withArgs("是否升级该处地产，100元(Y/N)?").returns('N');
            var houseSite = new HouseSiteController(house, cli);

            var playerMock = sinon.mock(owner);
            playerMock.expects('upgradeHouse').never();

            houseSite.handleUpgradeHouse(owner);

            playerMock.verify();
            sinon.assert.calledOnce(cliStub);

        }
    },

    'handle pay toll':{
        'pay owner': function() {
            var visitor = new Player(10000);
            var owner = new Player(10000);
            var house = new House(100);
            house.setOwner(owner);

            var houseSite = new HouseSiteController(house, {});

            var playerMock = sinon.mock(visitor);
            playerMock.expects('payToll').once().withArgs(house);

            houseSite.handlePayToll(visitor);

            playerMock.verify();
        }
    }
}).export(module);