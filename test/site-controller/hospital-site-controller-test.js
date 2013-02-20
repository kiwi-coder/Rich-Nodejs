var vows = require('vows'),
    assert = require('assert');

var HospitalSite = require('../../lib/site-controller').HospitalSiteController;

vows.describe('Hospital').addBatch({
    'display':function () {
        var hospitalSite = new HospitalSite();

        assert.equal(hospitalSite.display(), 'H');
    }
}).export(module);