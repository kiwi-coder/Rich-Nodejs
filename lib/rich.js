var Player = require('./player').Player;

exports.Rich = function () {
    const DEFAULT_INIT_MONEY = 10000;
    const MIN_INIT_MONEY = 1000;
    const MAX_INIT_MONEY = 50000;
    var initMoney = DEFAULT_INIT_MONEY;
    var players = [];

    this.initMoney = function (input) {
        if (input == "") {
            return;
        }
        initMoney = parseInt(input);
        if (initMoney < MIN_INIT_MONEY || initMoney > MAX_INIT_MONEY || isNaN(initMoney)) {
            throw new Error("init money error");
        }
    };

    this.getInitMoney = function () {
        return initMoney;
    };

    this.selectPlayers = function (input) {
        function checkSelectPlayersInput(input) {
            function hasDuplicatePlayer(input) {
                for (var i = 0; i < input.length; i++)
                    for (var j = i + 1; j < input.length; j++) {
                        if (input[i] == input[j]) return true;
                    }
                return false;
            }

            if (hasDuplicatePlayer(input)) {
                throw new Error('cannot select one player more than once');
            }
            function checkPlayerIndex(input) {
                for (var i = 0; i < input.length; i++) {
                    const MIN_PLAYER_INDEX = 1;
                    const MAX_PLAYER_INDEX = 4;
                    if (input[i] < MIN_PLAYER_INDEX || input[i] > MAX_PLAYER_INDEX) return true;
                }
                return false;
            }

            if (checkPlayerIndex(input)) {
                throw new Error('cannot select player out of index range');
            }
        }

        checkSelectPlayersInput(input);


        function checkPlayersNumber(input) {
            function lessThanTwoPlayers(input) {
                return input.length < 2;
            }

            if (lessThanTwoPlayers(input)) {
                throw new Error('should select more than 2 players');
            }
        }

        checkPlayersNumber(input);
        for (var index in input) {
            players.push(Player.selectPlayer(input[index]));
        }
    };

    this.getPlayers = function () {
        return players;
    };
};