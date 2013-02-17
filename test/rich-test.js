var vows = require('vows'),
    assert = require('assert');

var Rich = require('../lib/rich').Rich;

vows.describe('initialize player money').addBatch({
    'default is 10000':function () {
        var rich = new Rich();

        rich.initMoney("");

        assert.equal(rich.getInitMoney(), 10000);
    },

    'init money is 3000':function () {
        var rich = new Rich();

        rich.initMoney("3000");

        assert.equal(rich.getInitMoney(), 3000);
    },

    'init money is not in the range of 1000~50000':function () {
        var rich = new Rich();

        assert.throws(function () {
            rich.initMoney(100);
        }, Error);
    },

    'input is not integer':function () {
        var rich = new Rich();

        assert.throws(function () {
            rich.initMoney("invalid input");
        }, Error);
    }
}).export(module);

vows.describe('select players').addBatch({
    'should return QianFuRen and ATuBo':function () {
        var rich = new Rich();

        rich.selectPlayers("12");
        var players = rich.getPlayers();

        assert.equal(players.length, 2);
        assert.equal(players[0].getName(), 'QianFuRen');
        assert.equal(players[1].getName(), 'ATuBo');
    },

    'should not select one player more than 1 time':function () {
        var rich = new Rich();

        assert.throws(function () {
            rich.selectPlayers("11");
        }, Error);
    },

    'should not select player out of range':function () {
        var rich = new Rich();

        assert.throws(function () {
            rich.selectPlayers("45");
        }, Error);
    },

    'should select more than 2 players':function () {
        var rich = new Rich();

        assert.throws(function () {
            rich.selectPlayers("1");
        }, Error);
    }
}).export(module);