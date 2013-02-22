var vows = require('vows'),
    assert = require('assert');

var GiftSiteController = require('../../lib/site-controller').GiftSiteController;

vows.describe('GiftSite').addBatch({
    'should display G':function () {
        var magicSite = new GiftSiteController();

        assert.equal(magicSite.display(), 'G');
    }
}).export(module);