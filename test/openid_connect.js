/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
var openid_connect = paypal.openIdConnect;
var querystring = require('querystring');

var paypal = require('../');
require('./configure');

paypal.configure({
    'openid_client_id': 'CLIENT_ID',
    'openid_client_secret': 'CLIENT_SECRET',
    'openid_redirect_uri': 'http://example.com'
});

describe('OpenIDConnect', function () {

    if (process.env.NOCK_OFF !== 'true') {
        require('./mocks/openid_connect');
    }

    describe('authorizeUrl', function () {
        it('default', function (done) {
            var url = openid_connect.authorizeUrl();
            expect(url).to.contain('response_type=code');
            expect(url).to.contain('scope=openid');
            expect(url).to.contain('client_id=');
            expect(url).to.contain('redirect_uri=');
            expect(url).to.contain('www.sandbox.paypal.com');
            done();
        });

        it('with scope', function (done) {
            var url = openid_connect.authorizeUrl({'scope': 'openid profile'});
            expect(url).to.contain(querystring.stringify({'scope': 'openid profile'}));
            done();
        });

        it('with live mode', function (done) {
            paypal.configure({
                'mode': 'live'
            });
            var url = openid_connect.authorizeUrl({'scope': 'openid profile'});
            expect(url).to.not.contain('sandbox');
            expect(url).to.contain('www.paypal.com');
            paypal.configure({
                'mode': 'sandbox'
            });
            done();
        });
    });

    describe('logoutUrl', function () {
        it('default', function (done) {
            var url = openid_connect.logoutUrl();
            expect(url).to.contain('logout=true');
            done();
        });

        it('with id_token', function (done) {
            var url = openid_connect.logoutUrl({'id_token': 'test'});
            expect(url).to.contain('logout=true');
            expect(url).to.contain('id_token=test');
            done();
        });

        it('with live mode', function (done) {
            paypal.configure({
                'mode': 'live'
            });
            var url = openid_connect.logoutUrl({'id_token': 'test'});
            expect(url).to.not.contain('sandbox');
            expect(url).to.contain('www.paypal.com');
            paypal.configure({
                'mode': 'sandbox'
            });
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
