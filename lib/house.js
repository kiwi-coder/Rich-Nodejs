exports.House = function (initPrice) {
    var price = initPrice;
    var owner = null;
    var type = null;

    this.getType = function () {
        return type.getType();
    };

    this.setType = function (targetType) {
        type = HouseType.createHouseType(targetType);
    };

    this.upgrade = function () {
        type.upgrade(this);
    };

    this.getToll = function () {
        return type.getToll(this);
    };

    this.getPrice = function () {
        return price;
    };

    this.setPrice = function (targetPrice) {
        price = targetPrice;
    };

    this.setOwner = function (player) {
        owner = player;
    };

    this.getOwner = function () {
        return owner;
    };

    this.hasOwner = function () {
        return owner != null;
    };
};

function HouseType(type) {
    var type = type;

    this.getType = function () {
        return type;
    }

    this.setType = function (type) {
        this.type = type;
    }
}

function Plat() {
    this.upgrade = function (house) {
        house.setType('cottage');
    };

    this.getToll = function (house) {
        return house.getPrice() / 2;
    };
};

Plat.prototype = new HouseType('plat');

function Cottage() {
    this.upgrade = function (house) {
        house.setType('villa');
    }

    this.getToll = function (house) {
        return new Plat().getToll(house) * 2;
    };
};

Cottage.prototype = new HouseType('cottage');

function Villa() {
    this.upgrade = function (house) {
        house.setType('skyscraper');
    }

    this.getToll = function (house) {
        return new Cottage().getToll(house) * 2;
    };
}

Villa.prototype = new HouseType('villa');

function Skyscraper() {
    this.getToll = function (house) {
        return new Villa().getToll(house) * 2;
    }
}

Skyscraper.prototype = new HouseType('skyscraper');

HouseType.createHouseType = function (typeCode) {
    if (typeCode == 'plat') {
        return new Plat();
    } else if (typeCode == 'cottage') {
        return new Cottage();
    } else if (typeCode == 'villa') {
        return new Villa();
    } else if (typeCode == 'skyscraper') {
        return new Skyscraper();
    }
};