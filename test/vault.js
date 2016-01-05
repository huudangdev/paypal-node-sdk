/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

describe('SDK', function () {
    describe('CreditCard', function () {

        var credit_card_details = {
            "type": "visa",
            "number": "4417119669820331",
            "expire_month": "11",
            "expire_year": "2018",
            "cvv2": "123"
        };

        function create_credit_card(callback) {

            if (process.env.NOCK_OFF !== 'true') {
                require('./mocks/vault');
            }

            paypal.creditCard.create(credit_card_details, function (error, credit_card) {
                expect(error).equal(null);
                expect(credit_card.id).to.contain('CARD');
                callback(credit_card);
            });
        }

        it('create and get', function (done) {

            create_credit_card(function (credit_card) {
                paypal.creditCard.get(credit_card.id, function (error, credit_card) {
                    expect(error).equal(null);
                    expect(credit_card.id).to.contain('CARD');
                    done();
                });
            });
        });

        it('create and delete', function (done) {

            create_credit_card(function (credit_card) {
                paypal.creditCard.del(credit_card.id, function (error, no_response) {
                    expect(error).equal(null);
                    done();
                });
            });
        });

        it('create with invalid data', function (done) {

            paypal.creditCard.create({}, function (error, credit_card) {
                expect(error).not.equal(null);
                done();
            });
        });
    });
});
