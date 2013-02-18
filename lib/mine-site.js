exports.MineSite = function(bonusPoints) {
    var _bonusPoints = bonusPoints;

    this.acceptPlayer = function(player) {
        player.setPoints(player.getPoints() + _bonusPoints);
    };

    this.display = function() {
        return '$';
    }
};