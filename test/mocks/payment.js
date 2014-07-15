var nock = require('nock');

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, "{\"scope\":\"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card\",\"access_token\":\"ukzk9kqlwF2IbFBjsCwsayTZYkTRGz2UTn46ucY1l2Q\",\"token_type\":\"Bearer\",\"app_id\":\"APP-2EJ531395M785864S\",\"expires_in\":28800}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=1305',
  'paypal-debug-id': '25368f0629660',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=142&TopLevelTxnStartTime=1458ed07c99&Host=slcsbidensectoken502.slc.paypal.com&pid=26243',
  'correlation-id': '25368f0629660',
  date: 'Wed, 23 Apr 2014 13:39:59 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"sale","payer":{"payment_method":"credit_card","funding_instruments":[{"credit_card":{"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018","cvv2":"874"}}]},"transactions":[{"amount":{"total":"7","currency":"USD","details":{"subtotal":"5","tax":"1","shipping":"1"}},"description":"This is the payment transaction descriptiön."}]})
  .reply(201, "{\"id\":\"PAY-3YT781515K9510419KNL4FMA\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"5.00\",\"tax\":\"1.00\",\"shipping\":\"1.00\"}},\"description\":\"This is the payment transaction descriptiön.\",\"related_resources\":[{\"sale\":{\"id\":\"7PR173990Y544840C\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-3YT781515K9510419KNL4FMA\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=961',
  'paypal-debug-id': 'a2d4c39a4e4dc',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=212&TopLevelTxnStartTime=1458ed080dc&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': 'a2d4c39a4e4dc',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 13:40:16 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA')
  .reply(200, "{\"id\":\"PAY-3YT781515K9510419KNL4FMA\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"5.00\",\"tax\":\"1.00\",\"shipping\":\"1.00\"}},\"description\":\"This is the payment transaction descriptiön.\",\"related_resources\":[{\"sale\":{\"id\":\"7PR173990Y544840C\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-3YT781515K9510419KNL4FMA\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=21386',
  'paypal-debug-id': 'e1e006252eda0',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=211&TopLevelTxnStartTime=1458ed0c340&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': 'e1e006252eda0',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 13:40:16 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/payment?count=2')
  .reply(200, "{\"payments\":[{\"id\":\"PAY-3YT781515K9510419KNL4FMA\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"5.00\",\"tax\":\"1.00\",\"shipping\":\"1.00\"}},\"description\":\"This is the payment transaction descriptiön.\",\"related_resources\":[{\"sale\":{\"id\":\"7PR173990Y544840C\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-3YT781515K9510419KNL4FMA\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"self\",\"method\":\"GET\"}]},{\"id\":\"PAY-6RR68218JA5804912KNL4E2Y\",\"create_time\":\"2014-04-23T13:38:51Z\",\"update_time\":\"2014-04-23T13:39:10Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"7.41\",\"tax\":\"0.03\",\"shipping\":\"0.03\"}},\"description\":\"This is the payment transaction description.\",\"related_resources\":[{\"sale\":{\"id\":\"0RV9732723904663W\",\"create_time\":\"2014-04-23T13:38:51Z\",\"update_time\":\"2014-04-23T13:39:10Z\",\"state\":\"refunded\",\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-6RR68218JA5804912KNL4E2Y\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/0RV9732723904663W\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/0RV9732723904663W/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6RR68218JA5804912KNL4E2Y\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}},{\"refund\":{\"id\":\"64D48016E7728451R\",\"create_time\":\"2014-04-23T13:39:10Z\",\"update_time\":\"2014-04-23T13:39:10Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\"},\"sale_id\":\"0RV9732723904663W\",\"parent_payment\":\"PAY-6RR68218JA5804912KNL4E2Y\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/refund/64D48016E7728451R\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6RR68218JA5804912KNL4E2Y\",\"rel\":\"parent_payment\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/0RV9732723904663W\",\"rel\":\"sale\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6RR68218JA5804912KNL4E2Y\",\"rel\":\"self\",\"method\":\"GET\"}]}],\"count\":2,\"next_id\":\"PAY-2LA223779R6625639KNL4EWI\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=960',
  'paypal-debug-id': '675b8e6645eae',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=212&TopLevelTxnStartTime=1458ed0c663&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '675b8e6645eae',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 13:40:22 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });