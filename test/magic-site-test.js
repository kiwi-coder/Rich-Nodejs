var vows = require('vows'),
    assert = require('assert');

var MagicSite = require('../lib/magic-site').MagicSite;

vows.describe('display').addBatch({
    'magic site should display M':function() {
        var magicSite = new MagicSite();

        assert.equal(magicSite.display(), 'M');
    }
}).export(module);