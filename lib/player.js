exports.Player = function(money) {
	var money = money;
	
	this.buyHouse = function(house) {
		if (house.hasOwner()) {
			throw new Error("house already has an owner");
		}
		if (money < house.getPrice()) {
			throw new Error("money is not enough");
		}
		money -= house.getPrice();
		house.setOwner(this);
	}

	this.getMoney = function() {
		return money;
	}

}
