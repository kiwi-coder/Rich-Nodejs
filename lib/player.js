exports.Player = function (money) {
    var money = money;

    function checkMoney(price) {
        if (money < price) {
            throw new Error("money is not enough");
        }
    };

    this.buyHouse = function (house) {
        if (house.hasOwner()) {
            throw new Error("house already has an owner");
        }
        checkMoney(house.getPrice());
        money -= house.getPrice();
        house.setOwner(this);
    };

    this.upgradeHouse = function (house) {
        checkMoney(house.getPrice());
        money -= house.getPrice();
        house.upgrade();
    };

    this.getMoney = function () {
        return money;
    };
};
