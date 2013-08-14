/* Copyright 2013 PayPal */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal_sdk = require('../');
require('./configure');


describe('SDK', function () {
    describe('CreditCard', function () {

        var credit_card_details = {
            "type": "visa",
            "number": "4417119669820331",
            "expire_month": "11",
            "expire_year": "2018",
            "cvv2": "123" };

        function create_credit_card(callback) {
            paypal_sdk.credit_card.create(credit_card_details, function (error, credit_card) {
                expect(error).equal(null);
                expect(credit_card.id).to.contain('CARD');
                callback(credit_card);
            });
        }

        it('create and get', function (done) {

            create_credit_card(function (credit_card) {
                paypal_sdk.credit_card.get(credit_card.id, function (error, credit_card) {
                    expect(error).equal(null);
                    expect(credit_card.id).to.contain('CARD');
                    done();
                });
            });

        });

        it('create and delete', function (done) {

            create_credit_card(function (credit_card) {
                paypal_sdk.credit_card.delete(credit_card.id, function (error, no_response) {
                    expect(error).equal(null);
                    done();
                });
            });

        });

        it('create with invalid data', function (done) {
          paypal_sdk.credit_card.create({}, function (error, credit_card) {
            expect(error).not.equal(null);
            done();
          });
        });
    });
});
