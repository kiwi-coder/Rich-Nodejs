var vows = require('vows'),
    assert = require('assert');

var HospitalSite = require('../lib/hospital-site').HospitalSite;

vows.describe('display H').addBatch({
    'hospital display H':function() {
        var hospitalSite = new HospitalSite();

        assert.equal(hospitalSite.display(), 'H');
    }
}).export(module);