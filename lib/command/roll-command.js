exports.RollCommand = function (player, callback) {
    var player = player;
    var callback = callback;

    this.execute = function () {
        player.roll(callback);
    }
};