exports.House = function(initPrice) {
	var price = initPrice;
	var owner = {};

	this.getPrice = function() {
		return price;
	}

	this.setPrice = function(targetPrice) {
		price = targetPrice;
	}

	this.setOwner = function(player) {
		owner = player;
	}

	this.getOwner = function() {
		return owner;
	}

	this.hasOwner = function() {
		return owner == {};
	}
}
