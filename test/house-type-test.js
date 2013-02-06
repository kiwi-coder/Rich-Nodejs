var vows = require('vows'),
    assert = require('assert');

var House = require('../lib/house.js').House;
var Plat = require('../lib/house-type.js').Plat;
var Cottage = require('../lib/house-type.js').Cottage;
var Villa = require('../lib/house-type.js').Villa;
var Skyscraper = require('../lib/house-type.js').Skyscraper;

vows.describe('sell price').addBatch({
    'should sell plat for 200 when the original price is 100 ':function () {
        var house = new House(100);
        assert.equal(house.getSellPrice(), 200);
    },

    'should sell cottage for 400 when the original price is 100':function () {
        var house = new House(100);
        house.setType(Cottage);
        assert.equal(house.getSellPrice(), 400);
    },

    'should sell villa for 600 when the original price is 100':function () {
        var house = new House(100);
        house.setType(Villa);
        assert.equal(house.getSellPrice(), 600);
    },

    'should sell skyscraper for 800 when the original price is 100':function () {
        var house = new House(100);
        house.setType(Skyscraper);
        assert.equal(house.getSellPrice(), 800);
    }
}).export(module);


vows.describe('visitor pay for toll fee').addBatch({
    'should return pay for half of the price when the house is plat':function () {
        var house = new House(100);
        house.setType(Plat);

        assert.equal(house.getToll(), 50);
    },

    'should return pay for 100 of the price when the house is cottage':function () {
        var house = new House(100);
        house.setType(Cottage);

        assert.equal(house.getToll(), 100);
    },

    'should return pay for 200 of the price when the house is villa':function () {
        var house = new House(100);
        house.setType(Villa);

        assert.equal(house.getToll(), 200);
    },

    'should return pay for 400 of the price when the house is skyscraper':function () {
        var house = new House(100);
        house.setType(Skyscraper);

        assert.equal(house.getToll(), 400);
    }
}).export(module);

vows.describe('house type display').addBatch({
    'should return 0 for plat':function () {
        assert.equal(Plat.display(), '0');
    },

    'should return 1 for cottage':function () {
        assert.equal(Cottage.display(), '1');
    },

    'should return 2 for villa':function () {
        assert.equal(Villa.display(), '2');
    },

    'should return 3 for skyscraper': function() {
        assert.equal(Skyscraper.display(), '3');
    }
}).export(module);

vows.describe('upgrade').addBatch({
    'should upgrade plat to cottage when player has enough money':function () {
        var house = new House(100);
        house.setType(Plat);

        house.upgrade();

        assert.equal(house.getType(), Cottage);
    },

    'should upgrade cottage to villa':function () {
        var house = new House(100);
        house.setType(Cottage);

        house.upgrade();

        assert.equal(house.getType(), Villa);
    },

    'should upgrade villa to skyscraper':function () {
        var house = new House(100);
        house.setType(Villa);

        house.upgrade();

        assert.equal(house.getType(), Skyscraper);
    }
}).export(module);