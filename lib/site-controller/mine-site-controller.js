exports.MineSiteController = function (bonusPoints) {
    var _bonusPoints = bonusPoints;

    this.acceptPlayer = function (player) {
        player.gainPoints(_bonusPoints);
    };

    this.display = function () {
        return '$';
    }
};