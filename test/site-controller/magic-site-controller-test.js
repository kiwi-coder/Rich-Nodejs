var vows = require('vows'),
    assert = require('assert');

var MagicSiteController = require('../../lib/site-controller').MagicSiteController;

vows.describe('display').addBatch({
    'magic site should display M':function() {
        var magicSite = new MagicSiteController();

        assert.equal(magicSite.display(), 'M');
    }
}).export(module);