exports.House = function(initPrice) {
	var price = initPrice;
	var owner = null;
	var type = null;

	this.getType = function() {
		return type;
	}

	this.setType = function(targetType) {
		type = targetType;
	}

	this.upgrade = function() {
		if (type == 'plat') {
			this.setType('cottage');
		}else if (type == 'cottage') {
			this.setType('villa');
		}else if (type == 'villa') {
			this.setType('skyscraper');
		}
	}

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
		return owner != null;
	}
}
