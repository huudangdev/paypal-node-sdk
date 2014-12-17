/* Copyright 2015 PayPal */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

describe('SDK', function () {
    describe('#generateToken', function () {
        it('token should be generated', function (done) {

            if (process.env.NOCK_OFF !== 'true') {
                require('./mocks/generate_token');
            }

            paypal.generateToken(function (error, token) {
                should.exist(token);
                expect(token).to.contain('Bearer');
                done();
            });
        });
    });
});
