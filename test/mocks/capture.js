var nock = require('nock');

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, "{\"scope\":\"https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card openid https://uri.paypal.com/services/invoicing https://api.paypal.com/v1/vault/credit-card/.*\",\"access_token\":\"oFFdHUByktsqKr3bhTqtiII7O8Hn1ZHfCJLSioxMH4A\",\"token_type\":\"Bearer\",\"app_id\":\"APP-80W284485P519543T\",\"expires_in\":28800}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=271',
  'paypal-debug-id': '1d654f086b056',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=4621&TopLevelTxnStartTime=1459a76c0bf&Host=slcsbidensectoken502.slc.paypal.com&pid=4742',
  'correlation-id': '1d654f086b056',
  date: 'Fri, 25 Apr 2014 19:57:25 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"1.00","currency":"USD"}}]})
  .reply(201, "{\"id\":\"PAY-5P776733AH5604326KNNL4JQ\",\"create_time\":\"2014-04-25T19:57:26Z\",\"update_time\":\"2014-04-25T19:57:41Z\",\"state\":\"approved\",\"intent\":\"authorize\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"related_resources\":[{\"authorization\":{\"id\":\"51K614730J571064E\",\"create_time\":\"2014-04-25T19:57:26Z\",\"update_time\":\"2014-04-25T19:57:41Z\",\"state\":\"authorized\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"parent_payment\":\"PAY-5P776733AH5604326KNNL4JQ\",\"valid_until\":\"2014-05-24T19:57:26Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/51K614730J571064E\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/51K614730J571064E/capture\",\"rel\":\"capture\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/51K614730J571064E/void\",\"rel\":\"void\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5P776733AH5604326KNNL4JQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5P776733AH5604326KNNL4JQ\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=368',
  'paypal-debug-id': '710ff44b6b256',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=208&TopLevelTxnStartTime=1459a76c4aa&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': '710ff44b6b256',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:57:41 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/authorization/51K614730J571064E/capture', {"amount":{"currency":"USD","total":"1.00"}})
  .reply(200, "{\"id\":\"4WD92773MB0364428\",\"create_time\":\"2014-04-25T19:57:42Z\",\"update_time\":\"2014-04-25T19:57:56Z\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\"},\"is_final_capture\":false,\"state\":\"completed\",\"parent_payment\":\"PAY-5P776733AH5604326KNNL4JQ\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/4WD92773MB0364428\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/4WD92773MB0364428/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/51K614730J571064E\",\"rel\":\"authorization\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5P776733AH5604326KNNL4JQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=368',
  'paypal-debug-id': 'c9b168f177214',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=208&TopLevelTxnStartTime=1459a770472&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': 'c9b168f177214',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:57:56 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/payments/capture/4WD92773MB0364428')
  .reply(200, "{\"id\":\"4WD92773MB0364428\",\"create_time\":\"2014-04-25T19:57:42Z\",\"update_time\":\"2014-04-25T19:57:56Z\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\"},\"state\":\"completed\",\"parent_payment\":\"PAY-5P776733AH5604326KNNL4JQ\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/4WD92773MB0364428\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/4WD92773MB0364428/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5P776733AH5604326KNNL4JQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=358',
  'paypal-debug-id': 'fabbe77d75154',
  server_info: 'paymentsplatformserv:v1.payments.capture&CalThreadId=463851&TopLevelTxnStartTime=1459a773eff&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': 'fabbe77d75154',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:57:57 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"1.00","currency":"USD"}}]})
  .reply(201, "{\"id\":\"PAY-6NP39261LT9346308KNNL4RQ\",\"create_time\":\"2014-04-25T19:57:58Z\",\"update_time\":\"2014-04-25T19:58:14Z\",\"state\":\"approved\",\"intent\":\"authorize\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"related_resources\":[{\"authorization\":{\"id\":\"66J500511L291774M\",\"create_time\":\"2014-04-25T19:57:58Z\",\"update_time\":\"2014-04-25T19:58:14Z\",\"state\":\"authorized\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"parent_payment\":\"PAY-6NP39261LT9346308KNNL4RQ\",\"valid_until\":\"2014-05-24T19:57:58Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/66J500511L291774M\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/66J500511L291774M/capture\",\"rel\":\"capture\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/66J500511L291774M/void\",\"rel\":\"void\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6NP39261LT9346308KNNL4RQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6NP39261LT9346308KNNL4RQ\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=368',
  'paypal-debug-id': '4b02d4d57308b',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=208&TopLevelTxnStartTime=1459a77420d&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': '4b02d4d57308b',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:58:14 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/authorization/66J500511L291774M/capture', {"amount":{"currency":"USD","total":"1.00"}})
  .reply(200, "{\"id\":\"7YB63125RG796514P\",\"create_time\":\"2014-04-25T19:58:15Z\",\"update_time\":\"2014-04-25T19:58:30Z\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\"},\"is_final_capture\":false,\"state\":\"completed\",\"parent_payment\":\"PAY-6NP39261LT9346308KNNL4RQ\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/7YB63125RG796514P\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/7YB63125RG796514P/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/66J500511L291774M\",\"rel\":\"authorization\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6NP39261LT9346308KNNL4RQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=127',
  'paypal-debug-id': '63257b877f3b5',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=210&TopLevelTxnStartTime=1459a77843e&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '63257b877f3b5',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:58:29 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/capture/7YB63125RG796514P/refund', {})
  .reply(201, "{\"id\":\"7KR25294KD7584155\",\"create_time\":\"2014-04-25T19:58:33Z\",\"update_time\":\"2014-04-25T19:58:33Z\",\"state\":\"completed\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\"},\"capture_id\":\"7YB63125RG796514P\",\"parent_payment\":\"PAY-6NP39261LT9346308KNNL4RQ\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/refund/7KR25294KD7584155\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6NP39261LT9346308KNNL4RQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/7YB63125RG796514P\",\"rel\":\"capture\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=227',
  'paypal-debug-id': '5f5cc43d7b3b3',
  server_info: 'paymentsplatformserv:v1.payments.capture&CalThreadId=208&TopLevelTxnStartTime=1459a77c36a&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': '5f5cc43d7b3b3',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:58:33 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });
