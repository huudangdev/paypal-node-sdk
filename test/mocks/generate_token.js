var nock = require('nock');

nock('https://api.sandbox.paypal.com:443')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, "{\"scope\":\"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card\",\"access_token\":\"IUIkXAOcYVNHe5zcQajcNGwVWfoUcesp7-YURMLohPI\",\"token_type\":\"Bearer\",\"app_id\":\"APP-2EJ531395M785864S\",\"expires_in\":28800}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1675',
  'paypal-debug-id': 'ebb5ee4b55aff',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=133&TopLevelTxnStartTime=14585b765b6&Host=slcsbidensectoken501.slc.paypal.com&pid=3363',
  'correlation-id': 'ebb5ee4b55aff',
  date: 'Mon, 21 Apr 2014 19:16:00 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });