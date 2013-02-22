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

    this.removePlayer = function (player) {
        players = players.filter(function (element, index, array) {
            return element != player;
        })
    }

    this.acceptPlayer = function (player, cb) {
        this.addPlayer(player);
        controller.acceptPlayer(player, cb);
    }

    this.getController = function () {
        return controller;
    }
}