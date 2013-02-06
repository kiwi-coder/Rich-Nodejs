var vows = require('vows'),
    assert = require('assert');

var House = require('../lib/house.js').House;
var Player = require('../lib/player.js').Player;

vows.describe('player buy house').addBatch({

    'should be success when player has enough money':function () {
        var house = new House(100);
        var player = new Player(1000);

        player.buyHouse(house);

        assert.equal(house.getOwner(), player);
        assert.equal(player.getMoney(), 900);
    },

    'should receive exception when player does not have enough money':function () {
        var house = new House(10000);
        var player = new Player(1000);

        assert.throws(function () {
            player.buyHouse(house);
        }, Error);
        assert.equal(player.getMoney(), 1000);
        assert.isFalse(house.hasOwner());
    },

    'should receive exception when the house already have an owner':function () {
        var house = new House(100);
        var player = new Player(1000);

        house.setOwner(new Player(1000));

        assert.throws(function () {
            player.buyHouse(house);
        }, Error);
    }

}).export(module);

vows.describe('player upgrade house').addBatch({
    'should upgrade plat to cottage when player has enough money':function () {
        var player = new Player(1000);
        var house = new House(100);
        house.setType('plat');

        player.upgradeHouse(house);

        assert.equal(house.getType(), 'cottage');
        assert.equal(player.getMoney(), 900);
    },

    'should receive exception when player does not have enough money':function () {
        var player = new Player(10);
        var house = new House(100);
        house.setType('plat');

        assert.throws(function () {
            player.upgradeHouse(house);
        }, Error);
    },

    'should upgrade cottage to villa':function () {
        var player = new Player(1000);
        var house = new House(100);
        house.setType('cottage');

        player.upgradeHouse(house);

        assert.equal(house.getType(), 'villa');
        assert.equal(player.getMoney(), 900);
    },

    'should upgrade villa to skyscraper':function () {
        var player = new Player(1000);
        var house = new House(100);
        house.setType('villa');

        player.upgradeHouse(house);

        assert.equal(house.getType(), 'skyscraper');
        assert.equal(player.getMoney(), 900);
    }
}).export(module);

vows.describe('player sell house').addBatch({
    'should success sell house when the player is the owner':function () {
        var player = new Player(1000);
        var house = new House(100);
        house.setOwner(player);

        player.sellHouse(house);
        assert.equal(player.getMoney(), 1200);
        assert.isFalse(house.hasOwner());
    },

    'should throw exception when the player is not the owner':function () {
        var player = new Player(1000);
        var house = new House(100);

        assert.throws(function () {
            player.sellHouse(house);
        }, Error);
    }
}).export(module);