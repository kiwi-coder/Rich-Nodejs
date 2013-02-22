var vows = require('vows'),
    assert = require('assert');

var MagicSiteController = require('../../lib/site-controller').MagicSiteController;
var sinon = require('sinon');

vows.describe('MagicSite').addBatch({
    'should display M':function () {
        var magicSite = new MagicSiteController();

        assert.equal(magicSite.display(), 'M');
    }
}).export(module);