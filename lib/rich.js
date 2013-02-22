var Player = require('./player').Player;

var util = require('util');
var InputValidator = require('./input-validator').InputValidator;
var cli = require('./cli').cli;
var commandParser = require('./command-parser').commandParser;

exports.Rich = function () {
    const DEFAULT_INIT_MONEY = 10000;
    const MIN_INIT_MONEY = 1000;
    const MAX_INIT_MONEY = 50000;
    var initMoney = DEFAULT_INIT_MONEY;
    var players = [];
    var currentPlayerIndex = 0;
    var map;

    this.setMap = function (targetMap) {
        map = targetMap;
    }

    this.initMoney = function (input) {
        initMoney = input;
    };

    this.defaultInitMoney = function () {
        return DEFAULT_INIT_MONEY;
    }

    this.minInitMoney = function () {
        return MIN_INIT_MONEY;
    }

    this.maxInitMoney = function () {
        return MAX_INIT_MONEY;
    }

    this.initMoney = InputValidator.addInputValidator(this.initMoney,
        new InputValidator('初始化金钱范围错误',
            function (input) {
                return input < MIN_INIT_MONEY || input > MAX_INIT_MONEY;
            })
    );

    this.initMoney = InputValidator.addInputValidator(this.initMoney,
        new InputValidator('金钱必须是整数',
            function (input) {
                return !input.toString().match(/^[1-9]\d+$/);
            })
    );

    this.initMoney = InputValidator.addDefault(this.initMoney, "", 10000);

    this.getInitMoney = function () {
        return initMoney;
    };

    this.selectPlayers = function (input) {
        for (var index in input) {
            players.push(Player.selectPlayer(input[index]));
        }

        players.forEach(function (player, index, players) {
            player.setMap(map);
            player.setMoney(initMoney);
        })
    };

    this.selectPlayers = InputValidator.addInputValidator(this.selectPlayers,
        new InputValidator('至少选择两个玩家', function (input) {
            return input.length < 2;
        })
    );

    this.selectPlayers = InputValidator.addInputValidator(this.selectPlayers,
        new InputValidator('不能重复选择某一玩家', function (input) {
            for (var i = 0; i < input.length; i++)
                for (var j = i + 1; j < input.length; j++) {
                    if (input[i] == input[j]) return true;
                }
            return false;
        })
    );

    this.selectPlayers = InputValidator.addInputValidator(this.selectPlayers,
        new InputValidator('选择的玩家不存在', function (input) {
            for (var i = 0; i < input.length; i++) {
                const MIN_PLAYER_INDEX = 1;
                const MAX_PLAYER_INDEX = Player.names.length;
                if (input[i] < MIN_PLAYER_INDEX || input[i] > MAX_PLAYER_INDEX) return true;
            }
            return false;
        })
    );

    this.getPlayers = function () {
        return players;
    };

    this.startGame = function () {
        giveToken();
    };

    function giveToken() {
        console.log(map.display());
        var player = currentPlayer();
        promptCommand(player, function () {
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            giveToken();
        });
    }

    function promptCommand(player, callback) {
        cli.question(util.format("%s>", player.getName()), function (input) {
            var command = commandParser.parse(player, input, callback);
            command.execute();
        })
    }

    function currentPlayer() {
        return players[currentPlayerIndex];
    }
};