var nock = require('nock');

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015cfgWGJcrD-TJsXLw.B1clQ3GqX1G0etuZ8sohLmCZ7I","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=80979',
  'paypal-debug-id': '2ec207310856a',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=171&TopLevelTxnStartTime=1477e7383a6&Host=slcsbidensectoken502.slc.paypal.com&pid=20717',
  date: 'Mon, 28 Jul 2014 19:30:05 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD"}}]})
  .reply(201, {"id":"PAY-4U927911DR058234JKPLKJPQ","create_time":"2014-07-28T19:30:06Z","update_time":"2014-07-28T19:30:24Z","state":"approved","intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"xxxxxxxxxxxx0331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"related_resources":[{"authorization":{"id":"0RK65467EA345342V","create_time":"2014-07-28T19:30:06Z","update_time":"2014-07-28T19:30:24Z","amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"state":"authorized","parent_payment":"PAY-4U927911DR058234JKPLKJPQ","valid_until":"2014-08-26T19:30:06Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0RK65467EA345342V","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0RK65467EA345342V/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0RK65467EA345342V/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-4U927911DR058234JKPLKJPQ","rel":"parent_payment","method":"GET"}]}}]}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-4U927911DR058234JKPLKJPQ","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=80979',
  'paypal-debug-id': 'd36ec380081ed',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=128&TopLevelTxnStartTime=1477e738759&Host=slcsbjm1.slc.paypal.com&pid=23530',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:30:24 GMT',
  'content-type': 'application/json',
  'content-length': '1357' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/authorization/0RK65467EA345342V')
  .reply(200, {"id":"0RK65467EA345342V","create_time":"2014-07-28T19:30:06Z","update_time":"2014-07-28T19:30:24Z","amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"state":"authorized","parent_payment":"PAY-4U927911DR058234JKPLKJPQ","valid_until":"2014-08-26T19:30:06Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0RK65467EA345342V","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0RK65467EA345342V/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0RK65467EA345342V/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-4U927911DR058234JKPLKJPQ","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=291',
  'paypal-debug-id': 'ecc1251b12e07',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=202&TopLevelTxnStartTime=1477e73d2a1&Host=slcsbjm3.slc.paypal.com&pid=16961',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:30:25 GMT',
  'content-type': 'application/json',
  'content-length': '778' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD"}}]})
  .reply(201, {"id":"PAY-9X793799D49897052KPLKJUQ","create_time":"2014-07-28T19:30:26Z","update_time":"2014-07-28T19:30:45Z","state":"approved","intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"xxxxxxxxxxxx0331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"related_resources":[{"authorization":{"id":"8DX776641K0970446","create_time":"2014-07-28T19:30:26Z","update_time":"2014-07-28T19:30:45Z","amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"state":"authorized","parent_payment":"PAY-9X793799D49897052KPLKJUQ","valid_until":"2014-08-26T19:30:26Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/8DX776641K0970446","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/8DX776641K0970446/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/8DX776641K0970446/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-9X793799D49897052KPLKJUQ","rel":"parent_payment","method":"GET"}]}}]}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-9X793799D49897052KPLKJUQ","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=291',
  'paypal-debug-id': '7cb0bb2112975',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=202&TopLevelTxnStartTime=1477e73d534&Host=slcsbjm3.slc.paypal.com&pid=16961',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:30:44 GMT',
  'content-type': 'application/json',
  'content-length': '1357' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/authorization/8DX776641K0970446/capture', {"amount":{"currency":"USD","total":"4.00"}})
  .reply(200, {"id":"48J29121JK794832A","create_time":"2014-07-28T19:30:45Z","update_time":"2014-07-28T19:31:03Z","amount":{"total":"4.00","currency":"USD"},"is_final_capture":false,"state":"completed","parent_payment":"PAY-9X793799D49897052KPLKJUQ","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/capture/48J29121JK794832A","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/capture/48J29121JK794832A/refund","rel":"refund","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/8DX776641K0970446","rel":"authorization","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-9X793799D49897052KPLKJUQ","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=764',
  'paypal-debug-id': '1a04425a727c2',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=793&TopLevelTxnStartTime=1477e742175&Host=slcsbjm2.slc.paypal.com&pid=14111',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:31:03 GMT',
  'content-type': 'application/json',
  'content-length': '724' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD"}}]})
  .reply(201, {"id":"PAY-5PE52817A5045184DKPLKJ6A","create_time":"2014-07-28T19:31:04Z","update_time":"2014-07-28T19:31:22Z","state":"approved","intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"xxxxxxxxxxxx0331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"related_resources":[{"authorization":{"id":"0MM900359B6381213","create_time":"2014-07-28T19:31:04Z","update_time":"2014-07-28T19:31:22Z","amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"state":"authorized","parent_payment":"PAY-5PE52817A5045184DKPLKJ6A","valid_until":"2014-08-26T19:31:04Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0MM900359B6381213","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0MM900359B6381213/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0MM900359B6381213/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5PE52817A5045184DKPLKJ6A","rel":"parent_payment","method":"GET"}]}}]}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5PE52817A5045184DKPLKJ6A","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=288',
  'paypal-debug-id': 'd5ccd9a7694e0',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=266&TopLevelTxnStartTime=1477e7468cf&Host=slcsbjm2.slc.paypal.com&pid=14111',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:31:23 GMT',
  'content-type': 'application/json',
  'content-length': '1357' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/authorization/0MM900359B6381213/void', {})
  .reply(200, {"id":"0MM900359B6381213","create_time":"2014-07-28T19:31:04Z","update_time":"2014-07-28T19:31:22Z","amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"state":"voided","parent_payment":"PAY-5PE52817A5045184DKPLKJ6A","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/0MM900359B6381213","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5PE52817A5045184DKPLKJ6A","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=288',
  'paypal-debug-id': 'd26aa93064a3b',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=266&TopLevelTxnStartTime=1477e74b6df&Host=slcsbjm2.slc.paypal.com&pid=14111',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:31:24 GMT',
  'content-type': 'application/json',
  'content-length': '491' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD"}}]})
  .reply(201, {"id":"PAY-9R239435RW5384224KPLKKDI","create_time":"2014-07-28T19:31:25Z","update_time":"2014-07-28T19:31:43Z","state":"approved","intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"xxxxxxxxxxxx0331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"related_resources":[{"authorization":{"id":"9AL86355RH666682X","create_time":"2014-07-28T19:31:25Z","update_time":"2014-07-28T19:31:43Z","amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"state":"authorized","parent_payment":"PAY-9R239435RW5384224KPLKKDI","valid_until":"2014-08-26T19:31:25Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/9AL86355RH666682X","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/9AL86355RH666682X/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/9AL86355RH666682X/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-9R239435RW5384224KPLKKDI","rel":"parent_payment","method":"GET"}]}}]}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-9R239435RW5384224KPLKKDI","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=2190',
  'paypal-debug-id': 'd1f93e1b7bd6c',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=202&TopLevelTxnStartTime=1477e74baa7&Host=slcsbjm3.slc.paypal.com&pid=16961',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:31:43 GMT',
  'content-type': 'application/json',
  'content-length': '1357' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/authorization/9AL86355RH666682X/capture', {"amount":{"currency":"USD","total":"1.00"}})
  .reply(200, {"id":"5YP632759C4691005","create_time":"2014-07-28T19:31:44Z","update_time":"2014-07-28T19:32:00Z","amount":{"total":"1.00","currency":"USD"},"is_final_capture":false,"state":"completed","parent_payment":"PAY-9R239435RW5384224KPLKKDI","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/capture/5YP632759C4691005","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/capture/5YP632759C4691005/refund","rel":"refund","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/9AL86355RH666682X","rel":"authorization","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-9R239435RW5384224KPLKKDI","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=81289',
  'paypal-debug-id': '6970c35f7fadd',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=266&TopLevelTxnStartTime=1477e7506de&Host=slcsbjm2.slc.paypal.com&pid=14111',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:31:59 GMT',
  'content-type': 'application/json',
  'content-length': '724' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/authorization/9AL86355RH666682X/void', {})
  .reply(200, {"id":"9AL86355RH666682X","create_time":"2014-07-28T19:31:25Z","update_time":"2014-07-28T19:31:43Z","amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"state":"voided","parent_payment":"PAY-9R239435RW5384224KPLKKDI","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/9AL86355RH666682X","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-9R239435RW5384224KPLKKDI","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=81289',
  'paypal-debug-id': 'f0ac7b837baaf',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=266&TopLevelTxnStartTime=1477e75463e&Host=slcsbjm2.slc.paypal.com&pid=14111',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:32:01 GMT',
  'content-type': 'application/json',
  'content-length': '491' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD"}}]})
  .reply(201, {"id":"PAY-5T6307234B502013SKPLKKMI","create_time":"2014-07-28T19:32:01Z","update_time":"2014-07-28T19:32:19Z","state":"approved","intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"xxxxxxxxxxxx0331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"related_resources":[{"authorization":{"id":"2WD80049VF5042042","create_time":"2014-07-28T19:32:01Z","update_time":"2014-07-28T19:32:19Z","amount":{"total":"4.00","currency":"USD","details":{"subtotal":"4.00"}},"state":"authorized","parent_payment":"PAY-5T6307234B502013SKPLKKMI","valid_until":"2014-08-26T19:32:01Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/2WD80049VF5042042","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/2WD80049VF5042042/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/2WD80049VF5042042/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5T6307234B502013SKPLKKMI","rel":"parent_payment","method":"GET"}]}}]}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5T6307234B502013SKPLKKMI","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=21687',
  'paypal-debug-id': '833e6cdc64ef3',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=128&TopLevelTxnStartTime=1477e7549de&Host=slcsbjm1.slc.paypal.com&pid=23530',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:32:19 GMT',
  'content-type': 'application/json',
  'content-length': '1357' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/authorization/2WD80049VF5042042/capture', {"amount":{"currency":"USD","total":"1.00"},"is_final_capture":true})
  .reply(200, {"id":"21S90520JM083611T","create_time":"2014-07-28T19:32:20Z","update_time":"2014-07-28T19:32:37Z","amount":{"total":"1.00","currency":"USD"},"is_final_capture":true,"state":"completed","parent_payment":"PAY-5T6307234B502013SKPLKKMI","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/capture/21S90520JM083611T","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/capture/21S90520JM083611T/refund","rel":"refund","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/2WD80049VF5042042","rel":"authorization","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-5T6307234B502013SKPLKKMI","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=21687',
  'paypal-debug-id': 'f81241fa6956b',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=128&TopLevelTxnStartTime=1477e759241&Host=slcsbjm1.slc.paypal.com&pid=23530',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:32:37 GMT',
  'content-type': 'application/json',
  'content-length': '723' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/authorization/2WD80049VF5042042/void', {})
  .reply(400, {"name":"AUTHORIZATION_CANNOT_BE_VOIDED","message":"Authorization is in captured state and hence cannot be voided.","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#AUTHORIZATION_CANNOT_BE_VOIDED","debug_id":"a04bc2a572ba5"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=293',
  'paypal-debug-id': 'a04bc2a572ba5',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=248&TopLevelTxnStartTime=1477e75d7c1&Host=slcsbjm1.slc.paypal.com&pid=23530',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:32:38 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '252' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/authorization/7GH53639GA425732B/reauthorize', {"amount":{"currency":"USD","total":"4.54"}})
  .reply(400, {"name":"AUTHORIZATION_EXPIRED","message":"Authorization has expired","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#AUTHORIZATION_EXPIRED","debug_id":"858e94856debf"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=21687',
  'paypal-debug-id': '858e94856debf',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=128&TopLevelTxnStartTime=1477e75da06&Host=slcsbjm1.slc.paypal.com&pid=23530',
  'content-language': '*',
  date: 'Mon, 28 Jul 2014 19:32:38 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '197' });