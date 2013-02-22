var Tool = require('../tool').Tool;

exports.SellToolCommand = function (player, toolIndex) {
    var player = player;
    var toolIndex = toolIndex;

    this.execute = function () {
        var tool = Tool.createTool(toolIndex);
        player.sellTool(tool);
    }
};