exports.MineSiteController = function (bonusPoints) {
    var _bonusPoints = bonusPoints;

    this.acceptPlayer = function (player, cb) {
        player.gainPoints(_bonusPoints);
        cb();
    };

    this.display = function () {
        return '$';
    }
};