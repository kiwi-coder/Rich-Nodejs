var Map = require('./map').Map;
var Site = require('./site').Site;
var Cntl = require('./site-controller');
var House = require('./house').House;

var map = new Map(29, 8);

map.setSite(0, new Site(new Cntl.StartSiteController()));

for (var index = 1; index < 14; index++) {
    map.setSite(index, new Site(new Cntl.HouseSiteController(new House(200))));
}

map.setSite(14, new Site(new Cntl.HospitalSiteController()));

for (var index = 15; index < 28; index++) {
    map.setSite(index, new Site(new Cntl.HouseSiteController(new House(200))));
}

map.setSite(28, new Site(new Cntl.ToolSiteController()));

for (var index = 29; index < 35; index++) {
    map.setSite(index, new Site(new Cntl.HouseSiteController(new House(500))));
}

map.setSite(35, new Site(new Cntl.GiftSiteController()));

for (var index = 36; index < 49; index++) {
    map.setSite(index, new Site(new Cntl.HouseSiteController(new House(300))));
}

map.setSite(49, new Site(new Cntl.PrisonSiteController()));

for (var index = 50; index < 63; index++) {
    map.setSite(index, new Site(new Cntl.HouseSiteController(new House(300))));
}

map.setSite(63, new Site(new Cntl.MagicSiteController()));

map.setSite(64, new Site(new Cntl.MineSiteController(20)));
map.setSite(65, new Site(new Cntl.MineSiteController(80)));
map.setSite(66, new Site(new Cntl.MineSiteController(100)));
map.setSite(67, new Site(new Cntl.MineSiteController(40)));
map.setSite(68, new Site(new Cntl.MineSiteController(80)));
map.setSite(69, new Site(new Cntl.MineSiteController(60)));

exports.map = map;