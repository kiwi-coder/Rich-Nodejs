var vows = require('vows'),
    assert = require('assert');

var ToolSite = require('../../lib/site-controller').ToolSiteController;
var sinon = require('sinon');
var Player = require('../../lib/player').Player;
var Tool = require('../../lib/tool').Tool;

vows.describe('ToolControllerSite').addBatch({
    'tool site should display T':function () {
        var toolSite = new ToolSite();

        assert.equal(toolSite.display(), 'T');
    }
}).export(module);