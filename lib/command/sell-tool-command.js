var Tool = require('../tool').Tool;

exports.SellToolCommand = function (player, toolIndex, callback) {
    var player = player;
    var callback = callback;
    var toolIndex = toolIndex;

    this.execute = function () {
        var tool = Tool.createTool(toolIndex);
        player.sellTool(tool);
    }
};