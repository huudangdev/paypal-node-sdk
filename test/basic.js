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

    var obj1 = {
        "host": "api.sandbox.paypal.com",
        "port": "",
        "client_id": "SomeId",
        "client_secret": "SomeSecret"
    };

    var obj2 = {
        "mode": "sandbox",
        "schema": "https",
        "host": "api.sandbox.paypal.com",
        "port": "",
        "openid_connect_schema": "https",
        "openid_connect_host": "api.sandbox.paypal.com",
        "openid_connect_port": "",
        "authorize_url": "https://www.sandbox.paypal.com/webapps/auth/protocol/openidconnect/v1/authorize",
        "logout_url": "https://www.sandbox.paypal.com/webapps/auth/protocol/openidconnect/v1/endsession",
        "headers": {}
    };

    if (process.env.NOCK_OFF !== 'true') {
        require('./mocks/basic');
    }

    it('check version appears in user agent', function (done) {
        expect(sdkConfig.userAgent).to.contain(paypal.version);
        done();
    });

    it('check user agent contains crypto version', function (done) {
        var metadata = sdkConfig.userAgent.split('(')[1];
        var openssl = metadata.split(';')[1].split(' ')[1];
        var openssl_version = metadata.split(';')[1].split(' ')[2];
        expect(openssl).to.equal('OpenSSL');
        expect(openssl_version).to.not.be.undefined;
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

    it('merge retains header in configurations', function () {
        var result = util.merge(obj1, obj2);
        expect(result.headers).to.not.be.undefined;
    });
});
