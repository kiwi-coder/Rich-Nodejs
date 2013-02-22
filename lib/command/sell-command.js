exports.SellCommand = function (player, houseIndex) {
    var player = player;
    var houseIndex = houseIndex;

    this.execute = function () {
        player.sellHouseAtIndex(houseIndex);
    }
};