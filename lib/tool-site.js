var Tool = require('./tool').Tool;

function onBuyTool(message, callback) {
    console.log(message);
    var stdin = process.openStdin();
    stdin.once('data', function (data) {
        if (data >= 1 && data <= 3) {
            callback(data);
        }
    });
};

exports.ToolSite = function () {
    this.acceptPlayer = function (player) {
        onBuyTool("欢迎光临道具屋， 请选择您所需要的道具：", function (toolIndex) {
            try {
                player.buyTool(Tool.createTool(toolIndex));
            } catch (error) {
                console.error(error.message);
            }
        });
    };

    this.display = function () {
        return 'T';
    }
};