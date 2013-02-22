var util = require('util');
var HouseType = require('../../lib/house-type');
var Tool = require('../../lib/tool');

exports.QueryCommand = function (player) {
    var player = player;

    this.execute = function () {
        var result = "";
        result += util.format('资金：%d元\n', player.getMoney());
        result += util.format('点数：%d点\n', player.getPoints());
        result += util.format('地产：空地%d处；茅屋%d处；洋房%d处；摩天楼%d处\n',
            player.countHouse(HouseType.Plat), player.countHouse(HouseType.Cottage),
            player.countHouse(HouseType.Villa), player.countHouse(HouseType.Skyscraper));
        result += util.format('道具：路障%d个；炸弹%d个；机器娃娃%d个\n',
            player.countSpecificTool(new Tool.BlockTool()), player.countSpecificTool(new Tool.BombTool()),
            player.countSpecificTool(new Tool.RobotTool()));
        return console.log(result);
    }
}