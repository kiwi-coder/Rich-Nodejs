var util = require('util');
var cli = require('../cli').cli;

exports.HouseSiteController = function (house) {
    var house = house;

    this.getHouse = function () {
        return house;
    }

    this.handleBuyHouse = function (player, cb) {
        cli.questionln(util.format('是否购买该处空地，%d元(Y/N)?', house.getPrice()), function (input) {
            if (input.toString().toUpperCase() == 'Y') {
                player.buyHouse(house);
            }
            cb();
        });
    };

    this.handleUpgradeHouse = function (player, cb) {
        cli.questionln(util.format('是否升级该处地产，%d元(Y/N)?', house.getUpgradePrice()), function (input) {
            if (input.toString().toUpperCase() == 'Y') {
                player.upgradeHouse(house);
            }
            cb();
        });
    }

    this.handlePayToll = function (player, cb) {
        player.payToll(house);
        cb();
    }

    function canPlayerBuyHouse(player) {
        return !house.hasOwner() && player.getMoney() > house.getPrice();
    }

    function canPlayerUpgradeHouse(player) {
        return house.isOwner(player) && player.getMoney() > house.getUpgradePrice();
    }

    function shouldPlayerPayToll(player) {
        return house.hasOwner() && !house.isOwner(player);
    }

    this.acceptPlayer = function (player, cb) {
        if (canPlayerBuyHouse(player)) {
            this.handleBuyHouse(player, cb);
        } else if (canPlayerUpgradeHouse(player)) {
            this.handleUpgradeHouse(player, cb);
        } else if (shouldPlayerPayToll(player)) {
            this.handlePayToll(player, cb);
        } else {
            cb();
        }
    };

    this.display = function () {
        return house.display();
    }
};