var vows = require('vows'),
    assert = require('assert');

var PrisonSiteController = require('../../lib/site-controller').PrisonSiteController;

vows.describe('PrisonSite').addBatch({
    'should display P':function () {
        var magicSite = new PrisonSiteController();

        assert.equal(magicSite.display(), 'P');
    }
}).export(module);