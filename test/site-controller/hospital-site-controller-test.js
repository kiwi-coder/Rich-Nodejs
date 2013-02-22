var vows = require('vows'),
    assert = require('assert');

var HospitalSite = require('../../lib/site-controller').HospitalSiteController;
var sinon = require('sinon');

vows.describe('HospitalSiteController').addBatch({
    'display':function () {
        var hospitalSite = new HospitalSite();

        assert.equal(hospitalSite.display(), 'H');
    }
}).export(module);