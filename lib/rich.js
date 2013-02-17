var Player = require('./player').Player;
var InputValidator = require('./input-validator').InputValidator;

exports.Rich = function () {
    const DEFAULT_INIT_MONEY = 10000;
    const MIN_INIT_MONEY = 1000;
    const MAX_INIT_MONEY = 50000;
    var _initMoney = DEFAULT_INIT_MONEY;
    var players = [];

    this.initMoney = function (input) {
        _initMoney = input;
    };

    this.initMoney = InputValidator.addInputValidator(this.initMoney,
        new InputValidator('init money range should between ' + MIN_INIT_MONEY + "~" + MAX_INIT_MONEY,
            function (input) {
                return input < MIN_INIT_MONEY || input > MAX_INIT_MONEY;
            })
    );

    this.initMoney = InputValidator.addInputValidator(this.initMoney,
        new InputValidator('init money must be integer',
            function (input) {
                return !input.toString().match(/^[1-9]\d+$/);
            }
        )
    );

    this.initMoney = InputValidator.addDefault(this.initMoney, "", 10000);

    this.getInitMoney = function () {
        return _initMoney;
    };

    this.selectPlayers = function (input) {
        for (var index in input) {
            players.push(Player.selectPlayer(input[index]));
        }
    };

    this.selectPlayers = InputValidator.addInputValidator(this.selectPlayers,
        new InputValidator('should have at least than 2 players', function (input) {
            return input.length < 2;
        })
    );

    this.selectPlayers = InputValidator.addInputValidator(this.selectPlayers,
        new InputValidator('should not select a player more than once', function (input) {
            for (var i = 0; i < input.length; i++)
                for (var j = i + 1; j < input.length; j++) {
                    if (input[i] == input[j]) return true;
                }
            return false;
        })
    );

    this.selectPlayers = InputValidator.addInputValidator(this.selectPlayers,
        new InputValidator('should not select player out of range', function (input) {
            for (var i = 0; i < input.length; i++) {
                const MIN_PLAYER_INDEX = 1;
                const MAX_PLAYER_INDEX = 4;
                if (input[i] < MIN_PLAYER_INDEX || input[i] > MAX_PLAYER_INDEX) return true;
            }
            return false;
        })
    );

    this.getPlayers = function () {
        return players;
    };
};