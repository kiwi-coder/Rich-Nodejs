var vows = require('vows'),
    assert = require('assert');
var dice = require('../lib/dice').dice;

vows.describe('Dice').addBatch({
    'roll':{
        topic:dice.roll(),

        'should between 1 and 6, inclusively':function (rollResult) {
            assert.isTrue(rollResult >= 1 && rollResult <= 6);
        }
    }
}).export(module);