/* Copyright 2013 PayPal */
"use strict";

var chai = require('chai'),
	expect = chai.expect,
	should = chai.should();

var paypal_sdk = require('../');


var config_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
	'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
};



describe('SDK', function () {
	describe('#generateToken', function () {
		it('token should be generated', function (done) {
			paypal_sdk.generate_token(config_opts, function (err, generatedToken) {

				should.exist(generatedToken);
				expect(generatedToken).to.contain('Bearer');
				done();
			});
		});
	});
}

);