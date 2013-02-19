function onYes(message, callback) {
    console.log(message);
    var stdin = process.openStdin();
    stdin.once('data', function (data) {
        if (data.trim().toUpperCase() == 'Y') {
            callback();
        }
    });
};

exports.HouseSite = function (house) {
    var _house = house;

    function handleBuyHouse(player) {
        onYes('是否购买该处空地，' + _house.getPrice() + '元(Y/N)?', function () {
            player.buyHouse(_house);
        });
    }

    function handleUpgradeHouse(player) {
        onYes('是否升级该处地产，' + _house.getUpgradePrice() + '元(Y/N)?', function () {
            player.upgradeHouse(_house);
        });
    }

    function handlePayToll(player) {
        player.payToll(_house);
    }

    function canPlayerBuyHouse(player) {
        return !_house.hasOwner() && player.getMoney() > house.getPrice();
    }

    function canPlayerUpgradeHouse(player) {
        return _house.isOwner(player) && player.getMoney() > house.getUpgradePrice();
    }

    function shouldPlayerPayToll(player) {
        return house.hasOwner() && !_house.isOwner(player);
    }

    this.acceptPlayer = function (player) {
        if (canPlayerBuyHouse(player)) {
            handleBuyHouse(player);
        } else if (canPlayerUpgradeHouse(player)) {
            handleUpgradeHouse(player);
        } else if (shouldPlayerPayToll(player)){
            handlePayToll(player);
        }
    };
};