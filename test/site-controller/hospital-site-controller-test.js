var vows = require('vows'),
    assert = require('assert');

var HospitalSite = require('../../lib/site-controller').HospitalSiteController;
var sinon = require('sinon');

vows.describe('HospitalSiteController').addBatch({
    'display':function () {
        var hospitalSite = new HospitalSite();

        assert.equal(hospitalSite.display(), 'H');
    },

    'call callback':function() {
        var hospitalSite = new HospitalSite();

        var dummyPlayer = {};
        var mockCallback = sinon.mock();
        mockCallback.once();

        hospitalSite.acceptPlayer(dummyPlayer, mockCallback);

        mockCallback.verify();
    }
}).export(module);