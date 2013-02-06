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
Plat.prototype.constructor = Plat;

function Cottage() {
    this.upgrade = function (house) {
        house.setType('villa');
    }

    this.getToll = function (house) {
        return new Plat().getToll(house) * 2;
    };
};

Cottage.prototype = new HouseType('cottage');
Cottage.prototype.constructor = Cottage;

function Villa() {
    this.upgrade = function (house) {
        house.setType('skyscraper');
    }

    this.getToll = function (house) {
        return new Cottage().getToll(house) * 2;
    };
}

Villa.prototype = new HouseType('villa');
Villa.prototype.constructor = Villa;

function Skyscraper() {
    this.getToll = function (house) {
        return new Villa().getToll(house) * 2;
    }
}

Skyscraper.prototype = new HouseType('skyscraper');
Skyscraper.prototype.constructor = Skyscraper;

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

exports.HouseType = HouseType;