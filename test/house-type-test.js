var vows = require('vows'),
    assert = require('assert');

var House = require('../lib/house.js').House;
var HouseType = require('../lib/house-type.js').HouseType;

vows.describe('sell price').addBatch({
    'should sell plat for 200 when the original price is 100 ':function () {
        var house = new House(100);
        assert.equal(house.getSellPrice(), 200);
    },

    'should sell cottage for 400 when the original price is 100':function () {
        var house = new House(100);
        house.setType('cottage');
        assert.equal(house.getSellPrice(), 400);
    },

    'should sell villa for 600 when the original price is 100':function () {
        var house = new House(100);
        house.setType('villa');
        assert.equal(house.getSellPrice(), 600);
    },

    'should sell skyscraper for 800 when the original price is 100':function () {
        var house = new House(100);
        house.setType('skyscraper');
        assert.equal(house.getSellPrice(), 800);
    }
}).export(module);


vows.describe('visitor pay for toll fee').addBatch({
    'should return pay for half of the price when the house is plat':function () {
        var house = new House(100);
        house.setType("plat");

        assert.equal(house.getToll(), 50);
    },

    'should return pay for 100 of the price when the house is cottage':function () {
        var house = new House(100);
        house.setType("cottage");

        assert.equal(house.getToll(), 100);
    },

    'should return pay for 200 of the price when the house is villa':function () {
        var house = new House(100);
        house.setType("villa");

        assert.equal(house.getToll(), 200);
    },

    'should return pay for 400 of the price when the house is skyscraper':function () {
        var house = new House(100);
        house.setType("skyscraper");

        assert.equal(house.getToll(), 400);
    }
}).export(module);

vows.describe('house type display').addBatch({
    'should return 0 for plat':function () {
        var plat = HouseType.createHouseType('plat');
        assert.equal(plat.display(), '0');
    },

    'should return 1 for cottage':function () {
        var cottage = HouseType.createHouseType('cottage');
        assert.equal(cottage.display(), '1');
    },

    'should return 2 for villa':function () {
        var villa = HouseType.createHouseType('villa');
        assert.equal(villa.display(), '2');
    },

    'should return 3 for skyscraper': function() {
        var skyscraper = HouseType.createHouseType('skyscraper');
        assert.equal(skyscraper.display(), '3');
    }
}).export(module);