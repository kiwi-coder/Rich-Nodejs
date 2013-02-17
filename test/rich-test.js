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