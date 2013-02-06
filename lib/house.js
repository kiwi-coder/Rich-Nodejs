var HouseType = require('./house-type.js').HouseType;

exports.House = function (initPrice) {
    var price = initPrice;
    var owner = null;
    var type = HouseType.createHouseType('plat');

    this.getType = function () {
        return type.getType();
    };

    this.setType = function (targetType) {
        type = HouseType.createHouseType(targetType);
    };

    this.upgrade = function () {
        type.upgrade(this);
    };

    this.getSellPrice = function () {
        return type.getSellPrice(this);
    }

    this.getToll = function () {
        return type.getToll(this);
    };

    this.getPrice = function () {
        return price;
    };

    this.getUpgradePrice = function() {
        return this.getPrice();
    }

    this.setPrice = function (targetPrice) {
        price = targetPrice;
    };

    this.setOwner = function (player) {
        owner = player;
    };

    this.getOwner = function () {
        return owner;
    };

    this.hasOwner = function () {
        return owner != null;
    };

    this.resetOwner = function() {
        owner = null;
    }
};