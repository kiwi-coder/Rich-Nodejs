exports.Site = function (controller) {
    var controller = controller;
    var players = [];

    this.display = function () {
        if (players.length > 0) {
            return players[players.length - 1].display();
        }
        return controller.display();
    }

    this.addPlayer = function (player) {
        players.push(player);
    }

    this.acceptPlayer = function (player) {
        controller.acceptPlayer(player);
    }
}