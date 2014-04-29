/* Copyright 2013 PayPal */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal_sdk = require('../');
var openid_connect = paypal_sdk.openid_connect;
var querystring = require('querystring');

var paypal_sdk = require('../');
var config = require('./configure');

paypal_sdk.configure({
    'openid_client_id': 'CLIENT_ID',
    'openid_client_secret': 'CLIENT_SECRET',
    'openid_redirect_uri': 'http://example.com'
});

describe('OpenIDConnect', function () {

    if (config.NOCK_OFF !== 'true') {
      require('./mocks/openid_connect');
    }

    describe('authorize_url', function () {
        it('default', function (done) {
            var url = openid_connect.authorize_url();
            expect(url).to.contain('response_type=code');
            expect(url).to.contain('scope=openid');
            expect(url).to.contain('client_id=');
            expect(url).to.contain('redirect_uri=');
            done();
        });

        it('with scope', function (done) {
            var url = openid_connect.authorize_url({'scope': 'openid profile'});
            expect(url).to.contain(querystring.stringify({'scope': 'openid profile'}));
            done();
        });
    });

    describe('logout_url', function () {
        it('default', function (done) {
            var url = openid_connect.logout_url();
            expect(url).to.contain('logout=true');
            done();
        });

        it('with id_token', function (done) {
            var url = openid_connect.logout_url({'id_token': 'test'});
            expect(url).to.contain('logout=true');
            expect(url).to.contain('id_token=test');
            done();
        });
    });

    describe('Tokeninfo', function () {
        it('create with code', function (done) {
            openid_connect.tokeninfo.create('Invalid code', function (error, tokeninfo) {
                expect(error.httpStatusCode).equal(400);
                done();
            });
        });

        it('create with object', function (done) {
            openid_connect.tokeninfo.create({ 'code': 'Invalid code' }, function (error, tokeninfo) {
                expect(error.httpStatusCode).equal(400);
                done();
            });
        });

        it('refresh with refresh_token', function (done) {
            openid_connect.tokeninfo.refresh('Invalid refresh_token', function (error, tokeninfo) {
                expect(error.httpStatusCode).equal(400);
                done();
            });
        });

        it('refresh with object', function (done) {
            openid_connect.tokeninfo.refresh({ 'refresh_token': 'Invalid refresh_token' }, function (error, tokeninfo) {
                expect(error.httpStatusCode).equal(400);
                done();
            });
        });
    });

    describe('Userinfo', function () {
        it('get with access_token', function (done) {
            openid_connect.userinfo.get('Invalid access_token', function (error, userinfo) {
                expect(error.httpStatusCode).equal(401);
                done();
            });
        });

        it('get with object', function (done) {
            openid_connect.userinfo.get({ 'access_token': 'Invalid access_token' }, function (error, userinfo) {
                expect(error.httpStatusCode).equal(401);
                done();
            });
        });
    });
});
