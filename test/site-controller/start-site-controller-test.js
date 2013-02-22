var vows = require('vows'),
    assert = require('assert');

var StartSiteController = require('../../lib/site-controller').StartSiteController;
var sinon = require('sinon');

vows.describe('StartSite').addBatch({
    'should display S':function () {
        var startSite = new StartSiteController();

        assert.equal(startSite.display(), 'S');
    }
}).export(module);