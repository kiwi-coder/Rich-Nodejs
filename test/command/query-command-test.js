var vows = require('vows'),
    assert = require('assert');

var QueryCommand = require('../../lib/command/query-command').QueryCommand;
var Player = require('../../lib/player').Player;
var sinon = require('sinon');

vows.describe('RollCommand').addBatch({
    'execute to move forward':function () {
        var player = new Player(1000);
        player.setPoints(100);

        console.log = function (str) {
            assert.equal("资金：1000元\n" +
                "点数：100点\n" +
                "地产：空地1处；茅屋1处；洋房1处；摩天楼1处\n" +
                '道具：路障2个；炸弹2个；机器娃娃2个\n'
                , str);
        }

        sinon.stub(player, 'countHouse', function (level) {
            return 1;
        })

        sinon.stub(player, 'countSpecificTool', function (tool) {
            return 2;
        })

        new QueryCommand(player).execute();
    }
}).export(module);