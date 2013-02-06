var Plat = {
    upgrade:function (house) {
        house.setType(Cottage);
    },

    getToll:function (house) {
        return house.getPrice() / 2;
    },

    getSellPrice:function (house) {
        return house.getPrice() * 2;
    },

    display:function () {
        return '0';
    }
};

var Cottage = {
    upgrade:function (house) {
        house.setType(Villa);
    },

    getToll:function (house) {
        return Plat.getToll(house) * 2;
    },

    getSellPrice:function (house) {
        return Plat.getSellPrice(house) + house.getUpgradePrice() * 2;
    },

    display:function () {
        return '1';
    }
};

var Villa = {
    upgrade:function (house) {
        house.setType(Skyscraper);
    },

    getToll:function (house) {
        return Cottage.getToll(house) * 2;
    },

    getSellPrice:function (house) {
        return Cottage.getSellPrice(house) + house.getUpgradePrice() * 2;
    },

    display:function () {
        return '2';
    }
}

var Skyscraper = {
    getToll:function (house) {
        return Villa.getToll(house) * 2;
    },

    getSellPrice:function (house) {
        return Villa.getSellPrice(house) + house.getUpgradePrice() * 2;
    },

    display:function () {
        return '3';
    }
}

exports.Plat = Plat;
exports.Cottage = Cottage;
exports.Villa = Villa;
exports.Skyscraper = Skyscraper;