function Plat() {
    this.upgrade = function (house) {
        house.setType(new Cottage());
    };

    this.getToll = function (house) {
        return house.getPrice() / 2;
    };

    this.getSellPrice = function (house) {
        return house.getPrice() * 2;
    };

    this.display = function () {
        return '0';
    };
};

function Cottage() {
    this.upgrade = function (house) {
        house.setType(new Villa());
    };

    this.getToll = function (house) {
        return new Plat().getToll(house) * 2;
    };

    this.getSellPrice = function (house) {
        return new Plat().getSellPrice(house) + house.getUpgradePrice() * 2;
    };

    this.display = function () {
        return '1';
    };
};

function Villa() {
    this.upgrade = function (house) {
        house.setType(new Skyscraper());
    };

    this.getToll = function (house) {
        return new Cottage().getToll(house) * 2;
    };

    this.getSellPrice = function (house) {
        return new Cottage().getSellPrice(house) + house.getUpgradePrice() * 2;
    };

    this.display = function () {
        return '2';
    };
}

function Skyscraper() {
    this.getToll = function (house) {
        return new Villa().getToll(house) * 2;
    };

    this.getSellPrice = function (house) {
        return new Villa().getSellPrice(house) + house.getUpgradePrice() * 2;
    };

    this.display = function () {
        return '3';
    };
}

exports.Plat = Plat;
exports.Cottage = Cottage;
exports.Villa = Villa;
exports.Skyscraper = Skyscraper;