var vows = require('vows'),
    assert = require('assert'),
    events = require('events');
var HouseSiteController = require('../lib/site-controller').HouseSiteController;
var Player = require('../lib/player').Player;
var House = require('../lib/house').House;


vows.describe('notices when comes a player stop at this site').addBatch({
    'notice player buy house':function () {
        var player = new Player(10000);
        var houseSite = new HouseSiteController(new House(100));

        var consoleLogCalled = false;
        console.log = function (str) {
            assert.equal(str, "是否购买该处空地，100元(Y/N)?");
            consoleLogCalled = true;
        };

        houseSite.acceptPlayer(player);
        assert.isTrue(consoleLogCalled);
    },

    'player want to buy house':function () {
        var ev = new vows.options.Emitter();
        process.openStdin = function () {
            return ev;
        };

        var player = new Player(10000);
        var houseSite = new HouseSiteController(new House(100));

        console.log = function (str) {
        };

        var buyHouseCalled = false;
        player.buyHouse = function (house) {
            buyHouseCalled = true;
        };

        houseSite.acceptPlayer(player);

        ev.emit('data', "Y");
        assert.isTrue(buyHouseCalled);
    },

    'player do not want to buy house':function () {
        var ev = new vows.options.Emitter();
        process.openStdin = function () {
            return ev;
        };

        var player = new Player(10000);
        var houseSite = new HouseSiteController(new House(100));

        console.log = function (str) {
        };

        var buyHouseCalled = false;
        player.buyHouse = function (house) {
            buyHouseCalled = true;
        };

        houseSite.acceptPlayer(player);

        ev.emit('data', "N");
        assert.isFalse(buyHouseCalled);
    }
}).export(module);

vows.describe('player upgrade house').addBatch({
    'notice player upgrade house':function () {
        var owner = new Player(10000);
        const house = new House(100);
        house.setOwner(owner);
        var houseSite = new HouseSiteController(house);

        var consoleLogCalled = false;
        console.log = function (str) {
            assert.equal(str, "是否升级该处地产，100元(Y/N)?");
            consoleLogCalled = true;
        };

        houseSite.acceptPlayer(owner);
        assert.isTrue(consoleLogCalled);
    },

    'player upgrade house':function() {
        var ev = new vows.options.Emitter();
        process.openStdin = function () {
            return ev;
        };

        var owner = new Player(10000);
        const house = new House(100);
        house.setOwner(owner);
        var houseSite = new HouseSiteController(house);

        console.log = function (str) {
        };

        var upgradeHouseCalled = false;
        owner.upgradeHouse = function (house) {
            upgradeHouseCalled = true;
        };

        houseSite.acceptPlayer(owner);

        ev.emit('data', "Y\n");
        assert.isTrue(upgradeHouseCalled);
    }
}).export(module);
