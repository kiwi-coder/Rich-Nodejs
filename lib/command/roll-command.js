exports.RollCommand = function (player) {
    var player = player;

    this.execute = function () {
        player.roll();
    }
};