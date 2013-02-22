var util = require('util');

exports.HouseSiteController = function (house, cli) {
    var house = house;
    var cli = cli;

    this.getHouse = function () {
        return house;
    }

    this.handleBuyHouse = function (player) {
        var ans = cli.question(util.format('是否购买该处空地，%d元(Y/N)?', house.getPrice()));
        if (ans.toUpperCase() == 'Y') {
            player.buyHouse(house);
        }
    };

    this.handleUpgradeHouse = function (player) {
        var ans = cli.question(util.format('是否升级该处地产，%d元(Y/N)?', house.getUpgradePrice()));
        if (ans.toUpperCase() == 'Y') {
            player.upgradeHouse(house);
        }
    }

    this.handlePayToll = function (player) {
        player.payToll(house);
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

    this.acceptPlayer = function (player) {
        if (canPlayerBuyHouse(player)) {
            this.handleBuyHouse(player);
        } else if (canPlayerUpgradeHouse(player)) {
            this.handleUpgradeHouse(player);
        } else if (shouldPlayerPayToll(player)) {
            this.handlePayToll(player);
        }
    };

    this.display = function () {
        return house.display();
    }
};