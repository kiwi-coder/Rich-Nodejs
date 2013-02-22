var CLI = require('./util/cli').CLI;
var util = require('util');
var Rich = require('./rich').Rich;
var Site = require('./site').Site;
var defaultMap = require('./default-map');

var cli = new CLI();

var map = defaultMap.getMap(cli);
var rich = new Rich(cli);
rich.setMap(map);

rich.startGame();