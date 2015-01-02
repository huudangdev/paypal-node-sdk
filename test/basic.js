"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

describe('Main module tests', function () {

    var sdkConfig = require('../lib/configure');

    it('check version appears in user agent', function (done) {
        expect(sdkConfig.userAgent).to.contain(paypal.version);
        done();
    });
});
