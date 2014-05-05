/* Copyright 2013 PayPal */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal_sdk = require('../');
require('./configure');

describe('SDK', function () {
    describe('#generateToken', function () {
        it('token should be generated', function (done) {

          if (process.env.NOCK_OFF !== 'true') {
            require('./mocks/generate_token');
          }

            paypal_sdk.generate_token(function (error, generatedToken) {
                should.exist(generatedToken);
                expect(generatedToken).to.contain('Bearer');
                done();
            });
        });
    });
});


