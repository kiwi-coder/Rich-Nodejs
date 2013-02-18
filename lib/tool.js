function Tool() {
    this.isSameType = function (anotherTool) {
        return this.symbol == anotherTool.symbol;
    };
}

Tool.createTool = function (index) {
    var creators = [BlockTool, RobotTool, BombTool];
    return new creators[index - 1];
}

function BlockTool() {
    this.points = 50;
    this.symbol = '#';
    this.name = '路障';
}

BlockTool.prototype = new Tool();
BlockTool.prototype.constructor = BlockTool;

function RobotTool() {
    this.points = 30;
    this.symbol = ' ';
    this.name = '机器娃娃';
};

RobotTool.prototype = new Tool();
RobotTool.prototype.constructor = RobotTool;

function BombTool() {
    this.points = 50;
    this.symbol = '@';
    this.name = '炸弹';
};

BombTool.prototype = new Tool();
BombTool.prototype.constructor = BombTool;

exports.BlockTool = BlockTool;
exports.RobotTool = RobotTool;
exports.BombTool = BombTool;
exports.Tool = Tool;