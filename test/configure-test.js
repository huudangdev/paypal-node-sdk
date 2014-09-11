"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

describe('Configure Test', function () {
    it('Should return default options', function () {
        var config = paypal.configuration;
        config.should.be.a('object');
    });
});
