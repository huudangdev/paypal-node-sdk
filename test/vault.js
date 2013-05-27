/* Copyright 2013 PayPal */
"use strict";

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should();

var paypal_sdk = require('../');
require('./configure');

var credit_card_details = {
  "type": "visa",
  "number": "4417119669820331",
  "expire_month": "11",
  "expire_year": "2018",
  "cvv2": "123" };

describe('SDK', function () {
  describe('CreditCard', function () {
    it('create and get', function (done) {

      paypal_sdk.credit_card.create(credit_card_details, function (error, credit_card) {
        expect(error).equal(null);
        expect(credit_card.id).to.contain('CARD');

        paypal_sdk.credit_card.get(credit_card.id, function (error, credit_card) {
          expect(error).equal(null);
          expect(credit_card.id).to.contain('CARD');
          done();
        });

      })

    });
    it('create and delete', function(done) {

      paypal_sdk.credit_card.create(credit_card_details, function (error, credit_card) {
        expect(error).equal(null);
        expect(credit_card.id).to.contain('CARD');

        paypal_sdk.credit_card.delete(credit_card.id, function(error, no_response) {
          expect(error).equal(null);
          done();
        });

      });

    });
  });
});
