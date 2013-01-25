exports.Player = function(money) {
	var money = money;
	
	this.buyHouse = function(house) {
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
