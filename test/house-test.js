var vows = require('vows'),
    assert = require('assert');

var House = require('../lib/house.js').House;
var Player = require('../lib/player.js').Player;

vows.describe('player buy house').addBatch({

	'should be success when player has enough money': function() {
			var house = new House(100);
			var player = new Player(1000);

			player.buyHouse(house);

			assert.equal(house.getOwner(), player);
			assert.equal(player.getMoney(), 900);
	},

	'should receive exception when player does not have enough money': function() {
			var house = new House(10000);
			var player = new Player(1000);

			assert.throws(function(){ player.buyHouse(house);}, Error);
			assert.equal(player.getMoney(), 1000);
			assert.isFalse(house.hasOwner());
	},

	'should receive exception when the house already have an owner': function() {
			var house = new House(100);
			var player = new Player(1000);

			house.setOwner(new Player(1000));

			assert.throws(function(){ player.buyHouse(house);}, Error);
	}

}).export(module);
