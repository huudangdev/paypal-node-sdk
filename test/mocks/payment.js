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
  .get('/v1/payments/payment/?count=2')
  .reply(200, "{\"payments\":[{\"id\":\"PAY-3YT781515K9510419KNL4FMA\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"5.00\",\"tax\":\"1.00\",\"shipping\":\"1.00\"}},\"description\":\"This is the payment transaction descriptiön.\",\"related_resources\":[{\"sale\":{\"id\":\"7PR173990Y544840C\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-3YT781515K9510419KNL4FMA\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"self\",\"method\":\"GET\"}]},{\"id\":\"PAY-6RR68218JA5804912KNL4E2Y\",\"create_time\":\"2014-04-23T13:38:51Z\",\"update_time\":\"2014-04-23T13:39:10Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"7.41\",\"tax\":\"0.03\",\"shipping\":\"0.03\"}},\"description\":\"This is the payment transaction description.\",\"related_resources\":[{\"sale\":{\"id\":\"0RV9732723904663W\",\"create_time\":\"2014-04-23T13:38:51Z\",\"update_time\":\"2014-04-23T13:39:10Z\",\"state\":\"refunded\",\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-6RR68218JA5804912KNL4E2Y\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/0RV9732723904663W\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/0RV9732723904663W/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6RR68218JA5804912KNL4E2Y\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}},{\"refund\":{\"id\":\"64D48016E7728451R\",\"create_time\":\"2014-04-23T13:39:10Z\",\"update_time\":\"2014-04-23T13:39:10Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.47\",\"currency\":\"USD\"},\"sale_id\":\"0RV9732723904663W\",\"parent_payment\":\"PAY-6RR68218JA5804912KNL4E2Y\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/refund/64D48016E7728451R\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6RR68218JA5804912KNL4E2Y\",\"rel\":\"parent_payment\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/0RV9732723904663W\",\"rel\":\"sale\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6RR68218JA5804912KNL4E2Y\",\"rel\":\"self\",\"method\":\"GET\"}]}],\"count\":2,\"next_id\":\"PAY-2LA223779R6625639KNL4EWI\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=960',
  'paypal-debug-id': '675b8e6645eae',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=212&TopLevelTxnStartTime=1458ed0c663&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': '675b8e6645eae',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 13:40:22 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A0150cUrd0tW-Eajr3-2qpcXBSfTcFs13qKogUm915zmtN0","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=369',
  'paypal-debug-id': 'dc4dfeb400462',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=48124&TopLevelTxnStartTime=1480ea05155&Host=slcsbidensectoken502.slc.paypal.com&pid=26972',
  date: 'Mon, 25 Aug 2014 19:24:21 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"sale","redirect_urls":{"return_url":"http://www.return.com","cancel_url":"http://www.cancel.com"},"payer":{"payment_method":"paypal","payer_info":{"tax_id_type":"BR_CPF","tax_id":"Fh618775690"}},"transactions":[{"amount":{"total":"34.07","currency":"USD","details":{"subtotal":"30.00","tax":"0.07","shipping":"1.00","handling_fee":"1.00","shipping_discount":"1.00","insurance":"1.00"}},"description":"This is the payment transaction description.","custom":"EBAY_EMS_90048630024435","invoice_number":"48787589677","payment_options":{"allowed_payment_method":"INSTANT_FUNDING_SOURCE"},"soft_descriptor":"ECHI5786786","item_list":{"items":[{"name":"bowling","description":"Bowling Team Shirt","quantity":"5","price":"3","tax":"0.01","sku":"1","currency":"USD"},{"name":"mesh","description":"80s Mesh Sleeveless Shirt","quantity":"1","price":"17","tax":"0.02","sku":"product34","currency":"USD"},{"name":"discount","quantity":"1","price":"-2.00","sku":"product","currency":"USD"}],"shipping_address":{"recipient_name":"Betsy Buyer","line1":"111 First Street","city":"Saratoga","country_code":"US","postal_code":"95070","state":"CA"}}}]})
  .reply(201, {"id":"PAY-0YR21497TN572310FKP5Y2ZI","create_time":"2014-08-25T19:24:21Z","update_time":"2014-08-25T19:24:21Z","state":"created","intent":"sale","payer":{"payment_method":"paypal","payer_info":{"tax_id_type":"BR_CPF","tax_id":"Fh618775690"}},"transactions":[{"amount":{"total":"34.07","currency":"USD","details":{"subtotal":"30.00","tax":"0.07","shipping":"1.00","handling_fee":"1.00","insurance":"1.00","shipping_discount":"1.00"}},"description":"This is the payment transaction description.","custom":"EBAY_EMS_90048630024435","invoice_number":"48787589677","item_list":{"items":[{"name":"bowling","sku":"1","price":"3.00","currency":"USD","quantity":"5","description":"Bowling Team Shirt","tax":"0.01"},{"name":"mesh","sku":"product34","price":"17.00","currency":"USD","quantity":"1","description":"80s Mesh Sleeveless Shirt","tax":"0.02"},{"name":"discount","sku":"product","price":"-2.00","currency":"USD","quantity":"1"}],"shipping_address":{"recipient_name":"Betsy Buyer","line1":"111 First Street","city":"Saratoga","state":"CA","postal_code":"95070","country_code":"US"}}}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-0YR21497TN572310FKP5Y2ZI","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-76M16031KX044515E","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-0YR21497TN572310FKP5Y2ZI/execute","rel":"execute","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=247',
  'paypal-debug-id': '990debd10017b',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=213&TopLevelTxnStartTime=1480ea05583&Host=slcsbjm1.slc.paypal.com&pid=25157',
  'content-language': '*',
  date: 'Mon, 25 Aug 2014 19:24:21 GMT',
  'content-type': 'application/json',
  'content-length': '1490' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/payment/PAY-0YR21497TN572310FKP5Y2ZI',[{"op":"replace","path":"/transactions/0/amount","value":{"total":"36.07","currency":"USD","details":{"subtotal":"30.00","tax":"0.07","shipping":"1.00","handling_fee":"1.00","shipping_discount":"1.00","insurance":"5.00"}}}])
  .reply(200, {"id":"PAY-0YR21497TN572310FKP5Y2ZI","create_time":"2014-08-25T19:24:21Z","update_time":"2014-08-25T19:24:21Z","state":"created","intent":"sale","payer":{"payment_method":"paypal","payer_info":{"tax_id_type":"BR_CPF","tax_id":"Fh618775690"}},"transactions":[{"amount":{"total":"36.07","currency":"USD","details":{"subtotal":"30.00","tax":"0.07","shipping":"1.00","handling_fee":"1.00","insurance":"5.00","shipping_discount":"1.00"}},"description":"This is the payment transaction description.","custom":"EBAY_EMS_90048630024435","invoice_number":"48787589677","item_list":{"items":[{"name":"bowling","sku":"1","price":"3.00","currency":"USD","quantity":"5","description":"Bowling Team Shirt","tax":"0.01"},{"name":"mesh","sku":"product34","price":"17.00","currency":"USD","quantity":"1","description":"80s Mesh Sleeveless Shirt","tax":"0.02"},{"name":"discount","sku":"product","price":"-2.00","currency":"USD","quantity":"1"}],"shipping_address":{"recipient_name":"Betsy Buyer","line1":"111 First Street","city":"Saratoga","state":"CA","postal_code":"95070","country_code":"US"}}}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-0YR21497TN572310FKP5Y2ZI","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-76M16031KX044515E","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-0YR21497TN572310FKP5Y2ZI/execute","rel":"execute","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=247',
  'paypal-debug-id': '990debd10017b',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=213&TopLevelTxnStartTime=1480ea05583&Host=slcsbjm1.slc.paypal.com&pid=25157',
  'content-language': '*',
  date: 'Mon, 25 Aug 2014 19:24:21 GMT',
  'content-type': 'application/json',
  'content-length': '1490' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/payment/PAY-0XL713371A312273YKE2GCNI')
  .reply(200, "{\"id\":\"PAY-0XL713371A312273YKE2GCNI\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"approved\",\"intent\":\"sale\",\"payer\":{\"payment_method\":\"credit_card\",\"funding_instruments\":[{\"credit_card\":{\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\"}}]},\"transactions\":[{\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"5.00\",\"tax\":\"1.00\",\"shipping\":\"1.00\"}},\"description\":\"This is the payment transaction descriptiön.\",\"related_resources\":[{\"sale\":{\"id\":\"7PR173990Y544840C\",\"create_time\":\"2014-04-23T13:40:00Z\",\"update_time\":\"2014-04-23T13:40:16Z\",\"state\":\"completed\",\"amount\":{\"total\":\"7.00\",\"currency\":\"USD\"},\"parent_payment\":\"PAY-3YT781515K9510419KNL4FMA\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/sale/7PR173990Y544840C/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]}}]}],\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3YT781515K9510419KNL4FMA\",\"rel\":\"self\",\"method\":\"GET\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=21386',
  'paypal-debug-id': 'e1e006252eda0',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=211&TopLevelTxnStartTime=1458ed0c340&Host=slcsbjm2.slc.paypal.com&pid=18083',
  'correlation-id': 'e1e006252eda0',
  'content-language': '*',
  date: 'Wed, 23 Apr 2014 13:40:16 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });
