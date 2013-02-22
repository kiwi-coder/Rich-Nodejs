exports.SellCommand = function (player, houseIndex, callback) {
    var player = player;
    var callback = callback;
    var houseIndex = houseIndex;

    this.execute = function () {
        player.sellHouseAtIndex(houseIndex);
    }
};