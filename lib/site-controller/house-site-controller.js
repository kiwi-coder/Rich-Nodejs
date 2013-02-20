var util = require('util');

exports.HouseSiteController = function (house, cli) {
    var house = house;
    var cli = cli;

    function handleBuyHouse(player) {
        cli.onYes(util.format('是否购买该处空地，%d元(Y/N)?', house.getPrice()), function () {
            player.buyHouse(house);
        });
    }

    function handleUpgradeHouse(player) {
        cli.onYes(util.format('是否升级该处地产，%d元(Y/N)?', house.getUpgradePrice()), function () {
            player.upgradeHouse(house);
        });
    }

    function handlePayToll(player) {
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
            handleBuyHouse(player);
        } else if (canPlayerUpgradeHouse(player)) {
            handleUpgradeHouse(player);
        } else if (shouldPlayerPayToll(player)) {
            handlePayToll(player);
        }
    };
};