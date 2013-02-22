var vows = require('vows'),
    assert = require('assert');

var MagicSiteController = require('../../lib/site-controller').MagicSiteController;
var sinon = require('sinon');

vows.describe('MagicSite').addBatch({
    'should call callback':function () {
        var magicSite = new MagicSiteController();

        var dummyPlayer = {};
        var mockCallback = sinon.mock();

        magicSite.acceptPlayer(dummyPlayer, mockCallback);

        mockCallback.verify();
    },

    'should display M':function () {
        var magicSite = new MagicSiteController();

        assert.equal(magicSite.display(), 'M');
    }
}).export(module);