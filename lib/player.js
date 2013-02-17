exports.Player = function (money) {
    var money = money;
    var points = 0;
    var tools = [];
    var index = 0;
    var map;

    function checkHasSpecificTool(tool) {
        for (var index in tools) {
            if (tool.isSameType(tools[index])) return;
        }
        throw new Error("don't have such kind of tool");
    };

    function checkMoney(price) {
        if (money < price) {
            throw new Error("money is not enough");
        }
    };

    function checkToolCapacity() {
        var MAX_TOOL_CAPACITY = 10;
        if (tools.length >= MAX_TOOL_CAPACITY) {
            throw new Error("each player can not have more than " + MAX_TOOL_CAPACITY + " tools");
        }
    };

    function checkPoints(neededPoints) {
        if (points < neededPoints) {
            throw new Error('points is not enough');
        }
    };

    this.setIndex = function (targetIndex) {
        index = targetIndex;
    };

    this.setMap = function(targetMap){
        map = targetMap;
    };

    this.getIndex = function () {
        return index;
    };

    this.forward = function (steps) {
        index += steps;
        index %= map.size();
    }

    this.buyHouse = function (house) {
        if (house.hasOwner()) {
            throw new Error("house already has an owner");
        }
        checkMoney(house.getPrice());
        money -= house.getPrice();
        house.setOwner(this);
    };

    this.upgradeHouse = function (house) {
        checkMoney(house.getUpgradePrice());
        money -= house.getUpgradePrice();
        house.upgrade();
    };

    this.sellHouse = function (house) {
        if (house.getOwner() != this) {
            throw new Error("you are not the house owner");
        }
        money += house.getSellPrice();
        house.resetOwner();
    };

    this.getMoney = function () {
        return money;
    };

    this.setPoints = function (targetPoints) {
        points = targetPoints;
    };

    this.getPoints = function () {
        return points;
    };

    this.addTool = function (tool) {
        tools.push(tool);
    };

    this.buyTool = function (tool) {
        checkToolCapacity();
        checkPoints(tool.points);
        points -= tool.points;
        this.addTool(tool);
    };

    this.getAllToolCount = function () {
        return tools.length;
    };

    this.getSpecificToolCount = function (toolInstance) {
        var result = 0;
        for (var index in tools) {
            if (toolInstance.isSameType(tools[index])) result++;
        }
        return result;
    }

    this.sellTool = function (toolToSell) {
        checkHasSpecificTool(toolToSell);
        removeTool(toolToSell);
        addPoints(toolToSell.points);
    };

    function removeTool(tool) {
        for (var index in tools) {
            if (tool.isSameType(tools[index])) {
                tools.splice(index, 1);
                return;
            }
        }
    };

    function addPoints(pointsToAdd) {
        points += pointsToAdd;
    };
};