"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
var util = require('../lib/utils');
require('./configure');

describe('Main module tests', function () {

    var sdkConfig = require('../lib/configure');

    var token_hash = {
        "access_token": "WfXdnxmyJtdF4q59of",
        "app_id": "APP-0HB829954H",
        "expires_in": 9,
        "scope": "https://api.paypal.com/v1/payments/.* https://uri.paypal.com/services/payments/futurepayments",
        "token_type": "Bearer"
    };

    it('check version appears in user agent', function (done) {
        expect(sdkConfig.userAgent).to.contain(paypal.version);
        done();
    });

    it('check expired token success', function () {
        var current_time = new Date().getTime() / 1000;
        token_hash.created_at = current_time - 10;
        expect(util.checkExpiredToken(token_hash)).to.be.true;
    });

    it('check expired token failure', function () {
        var current_time = new Date().getTime() / 1000;
        token_hash.created_at = current_time;
        expect(util.checkExpiredToken(token_hash)).to.be.false;
    });
});
