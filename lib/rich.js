var program = require('commander');

exports.Rich = function () {
    var initMoney;

    this.initMoney = function (input) {
        if (input == "") {
            initMoney = 10000;
            return;
        }
        initMoney = parseInt(input);
        const MIN_INIT_MONEY = 1000;
        const MAX_INIT_MONEY = 50000;
        if (initMoney < MIN_INIT_MONEY || initMoney > MAX_INIT_MONEY || isNaN(initMoney)) {
            throw new Error("init money error");
        }
    };

    this.getInitMoney = function () {
        return initMoney;
    };
};