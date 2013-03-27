var chai = require('chai'),
	expect = chai.expect,
	should = chai.should();

var paypal_sdk = require('../');


var http_default_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'headers': {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': ''
	}
};

paypal_sdk.configure(http_default_opts);

var client_id = 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM';
var client_secret = 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM';



describe('SDK', function() {
	describe('#generateToken', function() {
		it('token should be generated', function(done) {
			paypal_sdk.generateToken(client_id, client_secret, function(generatedToken) {

				should.exist(generatedToken);
				expect(generatedToken).to.contain('Bearer');
				done();
			})
		})
	})
}

)