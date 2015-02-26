var nock = require('nock');

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, "{\"scope\":\"https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card openid https://uri.paypal.com/services/invoicing https://api.paypal.com/v1/vault/credit-card/.*\",\"access_token\":\"i.6XBhQ4WPZgsWqZFhYhoqqY1ZUd3ftA2QRpegKqkoE\",\"token_type\":\"Bearer\",\"app_id\":\"APP-80W284485P519543T\",\"expires_in\":28800}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=220',
  'paypal-debug-id': '5bb70e4cb8a12',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=90&TopLevelTxnStartTime=1459a6be603&Host=slcsbidensectoken501.slc.paypal.com&pid=12305',
  'correlation-id': '5bb70e4cb8a12',
  date: 'Fri, 25 Apr 2014 19:45:34 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/payment/', {"intent":"sale","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"number":"4417119669820331","type":"visa","expire_month":11,"expire_year":2018,"cvv2":874}}]},"transactions":[{"amount":{"total":"7.47","currency":"USD","details":{"subtotal":"7.41","tax":"0.03","shipping":"0.03"}},"description":"This is the payment transaction description."}]})
  .reply(201, "{\"id\":\"PAY-02U805131J440043SKNNLWXQ\",\"create_time\":\"2014-04-25T19:45:34Z\",\"update_time\":\"2014-04-25T19:45:51Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"7.41\",\"tax\":\"0.03\",\"shipping\":\"0.03\"}},\"description\":\"This is the payment transaction description.\",\"related_resources\":[{\"sale\":{\"id\":\"6SV69496KE114283L\",\"create_time\":\"2014-04-25T19:45:34Z\",\"update_time\":\"2014-04-25T19:45:51Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-02U805131J440043SKNNLWXQ\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/6SV69496KE114283L\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/6SV69496KE114283L/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-02U805131J440043SKNNLWXQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-02U805131J440043SKNNLWXQ\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=234',
  'paypal-debug-id': '13fb4aa9b87a3',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=208&TopLevelTxnStartTime=1459a6bea69&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': '13fb4aa9b87a3',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:45:51 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/payments/sale/6SV69496KE114283L')
  .reply(200, "{\"id\":\"6SV69496KE114283L\",\"create_time\":\"2014-04-25T19:45:34Z\",\"update_time\":\"2014-04-25T19:45:51Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-02U805131J440043SKNNLWXQ\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/6SV69496KE114283L\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/6SV69496KE114283L/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-02U805131J440043SKNNLWXQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': 'af2ec381c4058',
  server_info: 'paymentsplatformserv:v1.payments.sale&CalThreadId=463851&TopLevelTxnStartTime=1459a6c2f10&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': 'af2ec381c4058',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:45:52 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/payment/', {"intent":"sale","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"number":"4417119669820331","type":"visa","expire_month":11,"expire_year":2018,"cvv2":874}}]},"transactions":[{"amount":{"total":"7.47","currency":"USD","details":{"subtotal":"7.41","tax":"0.03","shipping":"0.03"}},"description":"This is the payment transaction description."}]})
  .reply(201, "{\"id\":\"PAY-2M2055585C481700NKNNLW4I\",\"create_time\":\"2014-04-25T19:45:53Z\",\"update_time\":\"2014-04-25T19:46:08Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"7.41\",\"tax\":\"0.03\",\"shipping\":\"0.03\"}},\"description\":\"This is the payment transaction description.\",\"related_resources\":[{\"sale\":{\"id\":\"9JC5587208637073G\",\"create_time\":\"2014-04-25T19:45:53Z\",\"update_time\":\"2014-04-25T19:46:08Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-2M2055585C481700NKNNLW4I\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/9JC5587208637073G\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/9JC5587208637073G/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2M2055585C481700NKNNLW4I\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2M2055585C481700NKNNLW4I\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=250',
  'paypal-debug-id': '78db1966c5d42',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=2043&TopLevelTxnStartTime=1459a6c33ab&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '78db1966c5d42',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:46:08 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/sale/9JC5587208637073G/refund', {})
  .reply(201, "{\"id\":\"6SL57049R79228511\",\"create_time\":\"2014-04-25T19:46:10Z\",\"update_time\":\"2014-04-25T19:46:10Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\"},\"sale_id\":\"9JC5587208637073G\",\"parent_payment\":\"PAY-2M2055585C481700NKNNLW4I\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/refund/6SL57049R79228511\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2M2055585C481700NKNNLW4I\",\"rel\":\"parent_payment\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/9JC5587208637073G\",\"rel\":\"sale\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=250',
  'paypal-debug-id': '35872246c1f22',
  server_info: 'paymentsplatformserv:v1.payments.sale&CalThreadId=2043&TopLevelTxnStartTime=1459a6c719f&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '35872246c1f22',
  'content-language': '*',
  date: 'Fri, 25 Apr 2014 19:46:11 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });
