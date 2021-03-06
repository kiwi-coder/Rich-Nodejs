var Plat = require('./house-type.js').Plat;

exports.House = function (initPrice) {
    var price = initPrice;
    var owner = null;
    var type = Plat;

    this.display = function () {
        return type.display();
    }

    this.getType = function () {
        return type;
    }

    this.setType = function (targetType) {
        type = targetType;
    }

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

    this.getUpgradePrice = function () {
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

    this.isOwner = function (player) {
        return owner == player;
    }

    this.resetOwner = function () {
        owner = null;
    }

    this.reset = function () {
        this.resetOwner();
        type = Plat;
    }
};