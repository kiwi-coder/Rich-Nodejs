var vows = require('vows'),
    assert = require('assert');

var Map = require('../lib/map').Map;

function DummySite() {
    this.display = function () {
        return '0';
    }
}

vows.describe('Map').addBatch({
    'site':{
        'should return 70':function () {
            assert.equal(new Map(29, 8).size(), 70);
        },

        'should return 8':function () {
            assert.equal(new Map(3, 3).size(), 8);
        }
    },

    'display':{
        topic:function () {
            var map = new Map(3, 3);
            for (var index = 0; index < map.size(); index++) {
                map.setSite(index, new DummySite());
            }
            return map;
        },

        'display as a square 3 * 3':function (map) {
            assert.equal(map.display(), "000\n" +
                "0 0\n" +
                "000\n");
        }
    }
}).export(module);