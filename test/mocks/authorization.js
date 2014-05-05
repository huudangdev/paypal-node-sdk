var nock = require('nock');

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, "{\"scope\":\"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card\",\"access_token\":\"sLWbXQf3OQg5H-N2vx.sBEr6yf0YQSTLDZUKg7a8bfE\",\"token_type\":\"Bearer\",\"app_id\":\"APP-2EJ531395M785864S\",\"expires_in\":28800}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=961',
  'paypal-debug-id': '73c5eddaee326',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=90&TopLevelTxnStartTime=1458efa7c29&Host=slcsbidensectoken501.slc.paypal.com&pid=3363',
  'correlation-id': '73c5eddaee326',
  date: 'Wed, 23 Apr 2014 14:25:52 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"1.00","currency":"USD"}}]})
  .reply(201, "{\"id\":\"PAY-7RF23371TK0278720KNL424A\",\"create_time\":\"2014-04-23T14:25:52Z\",\"update_time\":\"2014-04-23T14:26:07Z\",\"state\":\"approved\",\"intent\":\"authorize\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"related_resources\":[{\"authorization\":{\"id\":\"4BU49768VW3164350\",\"create_time\":\"2014-04-23T14:25:52Z\",\"update_time\":\"2014-04-23T14:26:07Z\",\"state\":\"authorized\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"parent_payment\":\"PAY-7RF23371TK0278720KNL424A\",\"valid_until\":\"2014-05-22T14:25:52Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/4BU49768VW3164350\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/4BU49768VW3164350/capture\",\"rel\":\"capture\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/4BU49768VW3164350/void\",\"rel\":\"void\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-7RF23371TK0278720KNL424A\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-7RF23371TK0278720KNL424A\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=233',
  'paypal-debug-id': '4934d2a489198',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=212&TopLevelTxnStartTime=1458efa8010&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '4934d2a489198',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 14:26:08 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/payments/authorization/4BU49768VW3164350')
  .reply(200, "{\"id\":\"4BU49768VW3164350\",\"create_time\":\"2014-04-23T14:25:52Z\",\"update_time\":\"2014-04-23T14:26:07Z\",\"state\":\"authorized\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"parent_payment\":\"PAY-7RF23371TK0278720KNL424A\",\"valid_until\":\"2014-05-22T14:25:52Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/4BU49768VW3164350\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/4BU49768VW3164350/capture\",\"rel\":\"capture\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/4BU49768VW3164350/void\",\"rel\":\"void\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-7RF23371TK0278720KNL424A\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=324',
  'paypal-debug-id': '8befa3ff88cde',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=128&TopLevelTxnStartTime=1458efac111&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '8befa3ff88cde',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 14:26:09 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"1.00","currency":"USD"}}]})
  .reply(201, "{\"id\":\"PAY-1V851490HR7957239KNL43AQ\",\"create_time\":\"2014-04-23T14:26:10Z\",\"update_time\":\"2014-04-23T14:26:25Z\",\"state\":\"approved\",\"intent\":\"authorize\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"related_resources\":[{\"authorization\":{\"id\":\"6R823205MT811891B\",\"create_time\":\"2014-04-23T14:26:10Z\",\"update_time\":\"2014-04-23T14:26:25Z\",\"state\":\"authorized\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"parent_payment\":\"PAY-1V851490HR7957239KNL43AQ\",\"valid_until\":\"2014-05-22T14:26:10Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/6R823205MT811891B\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/6R823205MT811891B/capture\",\"rel\":\"capture\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/6R823205MT811891B/void\",\"rel\":\"void\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-1V851490HR7957239KNL43AQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-1V851490HR7957239KNL43AQ\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=448',
  'paypal-debug-id': '817747c0e5cab',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=211&TopLevelTxnStartTime=1458efac497&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '817747c0e5cab',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 14:26:25 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/authorization/6R823205MT811891B/capture', {"amount":{"currency":"USD","total":"1.00"}})
  .reply(200, "{\"id\":\"5P186261BJ580001V\",\"create_time\":\"2014-04-23T14:26:26Z\",\"update_time\":\"2014-04-23T14:26:43Z\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\"},\"is_final_capture\":false,\"state\":\"completed\",\"parent_payment\":\"PAY-1V851490HR7957239KNL43AQ\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/5P186261BJ580001V\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/capture/5P186261BJ580001V/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/6R823205MT811891B\",\"rel\":\"authorization\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-1V851490HR7957239KNL43AQ\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=244',
  'paypal-debug-id': 'f56c91e29318e',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=128&TopLevelTxnStartTime=1458efb0303&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': 'f56c91e29318e',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 14:26:43 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/payment/', {"intent":"authorize","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018"}}]},"transactions":[{"amount":{"total":"1.00","currency":"USD"}}]})
  .reply(201, "{\"id\":\"PAY-7GM29177K8283352MKNL43JA\",\"create_time\":\"2014-04-23T14:26:44Z\",\"update_time\":\"2014-04-23T14:26:59Z\",\"state\":\"approved\",\"intent\":\"authorize\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"related_resources\":[{\"authorization\":{\"id\":\"7PX75169W42234441\",\"create_time\":\"2014-04-23T14:26:44Z\",\"update_time\":\"2014-04-23T14:26:59Z\",\"state\":\"authorized\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"parent_payment\":\"PAY-7GM29177K8283352MKNL43JA\",\"valid_until\":\"2014-05-22T14:26:44Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/7PX75169W42234441\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/7PX75169W42234441/capture\",\"rel\":\"capture\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/7PX75169W42234441/void\",\"rel\":\"void\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-7GM29177K8283352MKNL43JA\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-7GM29177K8283352MKNL43JA\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1675',
  'paypal-debug-id': 'c50c1e7686c5e',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=208&TopLevelTxnStartTime=1458efb49e8&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': 'c50c1e7686c5e',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 14:27:00 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/authorization/7PX75169W42234441/void', {})
  .reply(200, "{\"id\":\"7PX75169W42234441\",\"create_time\":\"2014-04-23T14:26:44Z\",\"update_time\":\"2014-04-23T14:26:59Z\",\"state\":\"voided\",\"amount\":{\"total\":\"1.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"1.00\"}},\"parent_payment\":\"PAY-7GM29177K8283352MKNL43JA\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/7PX75169W42234441\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-7GM29177K8283352MKNL43JA\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1675',
  'paypal-debug-id': '490351318aec1',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=208&TopLevelTxnStartTime=1458efb8b2c&Host=slcsbjm1.slc.paypal.com&pid=26082',
  'correlation-id': '490351318aec1',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 14:27:01 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/payments/authorization/7GH53639GA425732B/reauthorize', {"amount":{"currency":"USD","total":"4.54"}})
  .reply(400, "{\"name\":\"AUTHORIZATION_EXPIRED\",\"message\":\"Authorization has expired\",\"information_link\":\"https://developer.paypal.com/webapps/developer/docs/api/#AUTHORIZATION_EXPIRED\",\"debug_id\":\"90f83556f11d6\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=961',
  'paypal-debug-id': '90f83556f11d6',
  server_info: 'paymentsplatformserv:v1.payments.authorization&CalThreadId=211&TopLevelTxnStartTime=1458efb8fbc&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '90f83556f11d6',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 14:27:02 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });