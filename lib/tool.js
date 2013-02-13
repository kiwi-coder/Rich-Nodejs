function Tool() {
    this.isSameType = function (anotherTool) {
        return this.symbol == anotherTool.symbol;
    };
}

function BlockTool() {
    this.points = 50;
    this.symbol = '#';
}

BlockTool.prototype = new Tool();
BlockTool.prototype.constructor = BlockTool;

function RobotTool() {
    this.points = 30;
    this.symbol = ' ';
};

RobotTool.prototype = new Tool();
RobotTool.prototype.constructor = RobotTool;

function BombTool() {
    this.points = 50;
    this.symbol = '@';
};

BombTool.prototype = new Tool();
BombTool.prototype.constructor = BombTool;

exports.BlockTool = BlockTool;
exports.RobotTool = RobotTool;
exports.BombTool = BombTool;