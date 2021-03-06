var dice = require('./util/dice').dice;
var HouseSiteController = require('./site-controller').HouseSiteController;

function Player(money) {
    var money = money;
    var points = 0;
    var tools = [];
    var index = 0;
    var map;
    var name;

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

    this.setMap = function (targetMap) {
        map = targetMap;
    };

    this.getMap = function () {
        return map;
    };

    this.roll = function (cb) {
        this.getSite().removePlayer(this);
        var steps = dice.roll();
        this.forward(steps);
        this.getSite().acceptPlayer(this);
    };

    this.getIndex = function () {
        return index;
    };

    this.getSite = function () {
        return map.getSite(index);
    }

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
        house.reset();
    };

    this.countHouse = function (type) {
        var result = 0;
        for (var index = 0; index < map.size(); index++) {
            var controller = map.getSite(index).getController();
            if (controller instanceof HouseSiteController) {
                var house = controller.getHouse();
                if (house.getType() == type && house.isOwner(this)) result++;
            }
        }
        return result;
    };

    this.sellHouseAtIndex = function (houseIndex) {
        var map = this.getMap();
        console.log(houseIndex);
        var houseController = map.getSite(houseIndex).getController();
        this.sellHouse(houseController.getHouse());
    };

    this.payToll = function (house) {
        var owner = house.getOwner();
        owner.gainMoney(house.getToll());
        this.lostMoney(house.getToll());
    };

    this.gainMoney = function (moneyAmount) {
        money += moneyAmount;
    };

    this.lostMoney = function (moneyAmount) {
        money -= moneyAmount;
    };

    this.getMoney = function () {
        return money;
    };

    this.setMoney = function (targetMoney) {
        money = targetMoney;
    }

    this.gainPoints = function (pointsAmount) {
        points += pointsAmount;
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
        try {
            checkPoints(tool.points);
        } catch (error) {
            throw new Error('您当前剩余的点数为' + this.getPoints() + '， 不足以购买' + tool.name + '道具。');
        }
        points -= tool.points;
        this.addTool(tool);
    };

    this.getAllToolCount = function () {
        return tools.length;
    };

    this.countSpecificTool = function (toolInstance) {
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

    this.setName = function (targetName) {
        name = targetName;
    }

    this.getName = function () {
        return name;
    }

    this.display = function () {
        function capital(name) {
            return name[0].toUpperCase();
        }

        return capital(name);
    }

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

Player.names = ["QianFuRen", "ATuBo", "SunXiaoMei", "JinBeiBei"];

Player.selectPlayer = function (index) {
    var player = new Player(0);
    player.setName(Player.names[index - 1]);
    return player;
};

exports.Player = Player;
