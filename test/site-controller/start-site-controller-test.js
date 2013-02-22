var vows = require('vows'),
    assert = require('assert');

var StartSiteController = require('../../lib/site-controller').StartSiteController;
var sinon = require('sinon');

vows.describe('StartSite').addBatch({
    'should call callback':function () {
        var startSite = new StartSiteController();

        var dummyPlayer = {};
        var mockCallback = sinon.mock();

        startSite.acceptPlayer(dummyPlayer, mockCallback);

        mockCallback.verify();
    },

    'should display S':function () {
        var startSite = new StartSiteController();

        assert.equal(startSite.display(), 'S');
    }
}).export(module);