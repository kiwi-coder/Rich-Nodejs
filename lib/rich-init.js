var cli = require('./cli').cli;
var util = require('util');
var Rich = require('./rich').Rich;
var map = require('./default-map').map;

var rich = new Rich();
rich.setMap(map);

cli.repeatQuestion(
    util.format("设置玩家初始资金，范围%d～%d(默认%d)", rich.minInitMoney(), rich.maxInitMoney(), rich.defaultInitMoney()),
    function (input) {
        rich.initMoney(input);
        cli.repeatQuestion("请选择2~4位不重复玩家，输入编号即可。(1.钱夫人; 2.阿土伯; 3.孙小美; 4.金贝贝):", function (input) {
            rich.selectPlayers(input);
            rich.startGame();
        });
    }
);
