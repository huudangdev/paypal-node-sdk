var nock = require('nock');

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015iyYCuBCxNCCgL9qEMGcFnJcDjc4Vl8VEYJwJPDfRpcE","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=322',
  'paypal-debug-id': '516d35220a973',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=115897&TopLevelTxnStartTime=147f4202748&Host=slcsbidensectoken501.slc.paypal.com&pid=12608',
  date: 'Wed, 20 Aug 2014 15:54:14 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"order","payer":{"payment_method":"paypal"},"redirect_urls":{"return_url":"http://return.url","cancel_url":"http://cancel.url"},"transactions":[{"item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":1}]},"amount":{"currency":"USD","total":"10.00"},"description":"This is the payment description."}]})
  .reply(201, {"id":"PAY-0MW184453U444280BKP2MJJQ","create_time":"2014-08-20T15:54:14Z","update_time":"2014-08-20T15:54:14Z","state":"created","intent":"order","payer":{"payment_method":"paypal","payer_info":{"shipping_address":{}}},"transactions":[{"amount":{"total":"10.00","currency":"USD","details":{"subtotal":"10.00"}},"description":"This is the payment description.","item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":"1"}]}}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-0MW184453U444280BKP2MJJQ","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-7M591599VX796000M","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-0MW184453U444280BKP2MJJQ/execute","rel":"execute","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1490',
  'paypal-debug-id': 'b6342b4a0bb07',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=23887&TopLevelTxnStartTime=147f4202a95&Host=slcsbjm1.slc.paypal.com&pid=25157',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:54:14 GMT',
  'content-type': 'application/json',
  'content-length': '870' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/payment/PAY-0MW184453U444280BKP2MJJQ')
  .reply(200, {"id":"PAY-0MW184453U444280BKP2MJJQ","create_time":"2014-08-20T15:54:14Z","update_time":"2014-08-20T15:54:14Z","state":"created","intent":"order","payer":{"payment_method":"paypal","payer_info":{"shipping_address":{}}},"transactions":[{"amount":{"total":"10.00","currency":"USD","details":{"subtotal":"10.00"}},"description":"This is the payment description.","item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":"1"}]}}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-0MW184453U444280BKP2MJJQ","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-7M591599VX796000M","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-0MW184453U444280BKP2MJJQ/execute","rel":"execute","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=235',
  'paypal-debug-id': '2864ca460a2af',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=246&TopLevelTxnStartTime=147f4202d73&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:54:15 GMT',
  'content-type': 'application/json',
  'content-length': '870' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/orders/O-1PL20702WE6290838')
  .reply(200, {"id":"O-1PL20702WE6290838","create_time":"2014-08-19T22:34:25Z","update_time":"2014-08-19T23:11:06Z","state":"voided","amount":{"total":"1.00","currency":"USD","details":{"subtotal":"1.00"}},"parent_payment":"PAY-7WR04190AJ956011VKPZ5B4I","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-1PL20702WE6290838","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-7WR04190AJ956011VKPZ5B4I","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=248',
  'paypal-debug-id': '1ade8ca90a387',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=127&TopLevelTxnStartTime=147f4202f84&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:54:15 GMT',
  'content-type': 'application/json',
  'content-length': '488' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A0153qCYCUPDqlsobMcMdjB84Xp8raaZxjiw8I54IaNJdEs","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1044',
  'paypal-debug-id': '97f139c7a21e6',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=127&TopLevelTxnStartTime=147f41ab1ba&Host=slcsbidensectoken502.slc.paypal.com&pid=26972',
  date: 'Wed, 20 Aug 2014 15:48:15 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"order","payer":{"payment_method":"paypal"},"redirect_urls":{"return_url":"http://return.url","cancel_url":"http://cancel.url"},"transactions":[{"item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":1}]},"amount":{"currency":"USD","total":"10.00"},"description":"This is the payment description."}]})
  .reply(201, {"id":"PAY-2EN83476UG8507516KP2MGQA","create_time":"2014-08-20T15:48:16Z","update_time":"2014-08-20T15:48:16Z","state":"created","intent":"order","payer":{"payment_method":"paypal","payer_info":{"shipping_address":{}}},"transactions":[{"amount":{"total":"10.00","currency":"USD","details":{"subtotal":"10.00"}},"description":"This is the payment description.","item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":"1"}]}}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2EN83476UG8507516KP2MGQA","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-1K077416G88047733","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2EN83476UG8507516KP2MGQA/execute","rel":"execute","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=636',
  'paypal-debug-id': 'e93db4b4a3976',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=305&TopLevelTxnStartTime=147f41ab4a9&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:16 GMT',
  'content-type': 'application/json',
  'content-length': '870' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/payment/PAY-2EN83476UG8507516KP2MGQA')
  .reply(200, {"id":"PAY-2EN83476UG8507516KP2MGQA","create_time":"2014-08-20T15:48:16Z","update_time":"2014-08-20T15:48:16Z","state":"created","intent":"order","payer":{"payment_method":"paypal","payer_info":{"shipping_address":{}}},"transactions":[{"amount":{"total":"10.00","currency":"USD","details":{"subtotal":"10.00"}},"description":"This is the payment description.","item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":"1"}]}}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2EN83476UG8507516KP2MGQA","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-1K077416G88047733","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2EN83476UG8507516KP2MGQA/execute","rel":"execute","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=636',
  'paypal-debug-id': '11707c6ea3b4d',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=305&TopLevelTxnStartTime=147f41ab675&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:16 GMT',
  'content-type': 'application/json',
  'content-length': '870' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/PAY-2EN83476UG8507516KP2MGQA/execute', {"payer_id":"dummy"})
  .reply(400, {"name":"INVALID_PAYER_ID","message":"Payer ID is invalid","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#INVALID_PAYER_ID","debug_id":"8b2768b5a3da7"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=235',
  'paypal-debug-id': '8b2768b5a3da7',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=212&TopLevelTxnStartTime=147f41ab871&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:17 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '181' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/', {"intent":"order","payer":{"payment_method":"paypal"},"redirect_urls":{"return_url":"http://return.url","cancel_url":"http://cancel.url"},"transactions":[{"item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":1}]},"amount":{"currency":"USD","total":"10.00"},"description":"This is the payment description."}]})
  .reply(201, {"id":"PAY-3VH36914KK0714333KP2MGQQ","create_time":"2014-08-20T15:48:18Z","update_time":"2014-08-20T15:48:18Z","state":"created","intent":"order","payer":{"payment_method":"paypal","payer_info":{"shipping_address":{}}},"transactions":[{"amount":{"total":"10.00","currency":"USD","details":{"subtotal":"10.00"}},"description":"This is the payment description.","item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":"1"}]}}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3VH36914KK0714333KP2MGQQ","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-0J858360BN8789936","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3VH36914KK0714333KP2MGQQ/execute","rel":"execute","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=636',
  'paypal-debug-id': 'f33a1ea1a3744',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=305&TopLevelTxnStartTime=147f41aba91&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:18 GMT',
  'content-type': 'application/json',
  'content-length': '870' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/payment/PAY-3VH36914KK0714333KP2MGQQ')
  .reply(200, {"id":"PAY-3VH36914KK0714333KP2MGQQ","create_time":"2014-08-20T15:48:18Z","update_time":"2014-08-20T15:48:18Z","state":"created","intent":"order","payer":{"payment_method":"paypal","payer_info":{"shipping_address":{}}},"transactions":[{"amount":{"total":"10.00","currency":"USD","details":{"subtotal":"10.00"}},"description":"This is the payment description.","item_list":{"items":[{"name":"item","sku":"item","price":"10.00","currency":"USD","quantity":"1"}]}}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3VH36914KK0714333KP2MGQQ","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-0J858360BN8789936","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-3VH36914KK0714333KP2MGQQ/execute","rel":"execute","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=127',
  'paypal-debug-id': 'ebe08c9aa36e6',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=13877&TopLevelTxnStartTime=147f41abcf6&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:18 GMT',
  'content-type': 'application/json',
  'content-length': '870' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/PAY-3VH36914KK0714333KP2MGQQ/execute', {"payer_id":"HCXTE7DLHVTDN"})
  .reply(400, {"name":"PAYMENT_NOT_APPROVED_FOR_EXECUTION","message":"Payer has not approved payment","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#PAYMENT_NOT_APPROVED_FOR_EXECUTION","debug_id":"a878d0f5a2e1e"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1543',
  'paypal-debug-id': 'a878d0f5a2e1e',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=215&TopLevelTxnStartTime=147f41abe9d&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:19 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '228' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/orders/O-1PL20702WE6290838/do-void', {})
  .reply(200, {"id":"O-1PL20702WE6290838","create_time":"2014-08-19T22:34:25Z","update_time":"2014-08-19T23:11:06Z","state":"voided","amount":{"total":"1.00","currency":"USD","details":{"subtotal":"1.00"}},"parent_payment":"PAY-7WR04190AJ956011VKPZ5B4I","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-1PL20702WE6290838","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-7WR04190AJ956011VKPZ5B4I","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=127',
  'paypal-debug-id': '7dbd9136a4a5e',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=13877&TopLevelTxnStartTime=147f41ac04e&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:18 GMT',
  'content-type': 'application/json',
  'content-length': '488' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/orders/O-1PL20702WE6290838/authorize', {"amount":{"currency":"USD","total":"0.20"}})
  .reply(400, {"name":"ORDER_ALREADY_COMPLETED","message":"Order has already been voided, expired or completed","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#ORDER_ALREADY_COMPLETED","debug_id":"83312d14a4957"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=127',
  'paypal-debug-id': '83312d14a4957',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=13877&TopLevelTxnStartTime=147f41ac40e&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:20 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '227' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/orders/O-45139474YJ962820K/capture', {"amount":{"currency":"USD","total":"0.70"},"is_final_capture":true})
  .reply(400, {"name":"ORDER_VOIDED","message":"Order has been voided","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#ORDER_VOIDED","debug_id":"5267e17ea4def"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=710',
  'paypal-debug-id': '5267e17ea4def',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=212&TopLevelTxnStartTime=147f41ac676&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:21 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '175' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/orders/O-20L81840AL4365052/capture', {"amount":{"currency":"USD","total":"0.70"},"is_final_capture":true})
  .reply(400, {"name":"ORDER_ALREADY_COMPLETED","message":"Order has already been voided, expired or completed","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#ORDER_ALREADY_COMPLETED","debug_id":"ce307301a4378"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=710',
  'paypal-debug-id': 'ce307301a4378',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=13877&TopLevelTxnStartTime=147f41ac8dc&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:21 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '227' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/orders/O-20L81840AL4365052/do-void', {})
  .reply(400, {"name":"ORDER_CANNOT_BE_VOIDED","message":"Order is in captured state and hence cannot be voided.","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#ORDER_CANNOT_BE_VOIDED","debug_id":"b29200b1a4118"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=710',
  'paypal-debug-id': 'b29200b1a4118',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=13877&TopLevelTxnStartTime=147f41acb3d&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 15:48:22 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '228' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015HBJqcTlqaS0zhV9FiEqNwbHZ0vQbfdCMabefakFDPQc","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=832',
  'paypal-debug-id': '1718e1536ffe0',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=97056&TopLevelTxnStartTime=147f4267105&Host=slcsbidensectoken501.slc.paypal.com&pid=12608',
  date: 'Wed, 20 Aug 2014 16:01:06 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/PAY-7WR04190AJ956011VKPZ5B4I/execute', {"payer_id":"HCXTE7DLHVTDN"})
  .reply(400, {"name":"PAYMENT_STATE_INVALID","message":"This request is invalid due to the current state of the payment","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#PAYMENT_STATE_INVALID","debug_id":"6833a8276f889"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=535',
  'paypal-debug-id': '6833a8276f889',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=127&TopLevelTxnStartTime=147f4267480&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 16:01:06 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '235' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015EHazaW5IYBPmFwbkBimjoCMpZtld4lcmVD0XJC4JtUo","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=275',
  'paypal-debug-id': '793a45bfde168',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=129&TopLevelTxnStartTime=147f42d6c32&Host=slcsbidensectoken501.slc.paypal.com&pid=12608',
  date: 'Wed, 20 Aug 2014 16:08:43 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/payment/PAY-75S55092W03420906KP2LESA/execute', {"payer_id":"HCXTE7DLHVTDN"})
  .reply(200, {"id":"PAY-75S55092W03420906KP2LESA","create_time":"2014-08-20T14:35:52Z","update_time":"2014-08-20T16:08:45Z","state":"approved","intent":"order","payer":{"payment_method":"paypal","payer_info":{"email":"android_test1@gmail.com","first_name":"John ","last_name":"Smith","payer_id":"HCXTE7DLHVTDN","shipping_address":{"line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US","recipient_name":""}}},"transactions":[{"amount":{"total":"1.00","currency":"USD","details":{"subtotal":"1.00"}},"description":"This is the payment description.","item_list":{"items":[{"name":"item","sku":"item","price":"1.00","currency":"USD","quantity":"1"}],"shipping_address":{"recipient_name":"John  Smith","line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}},"related_resources":[{"order":{"id":"O-0GP27740YY051761P","create_time":"2014-08-20T14:35:52Z","update_time":"2014-08-20T16:08:45Z","state":"pending","amount":{"total":"1.00","currency":"USD","details":{"subtotal":"1.00"}},"parent_payment":"PAY-75S55092W03420906KP2LESA","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-0GP27740YY051761P","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-75S55092W03420906KP2LESA","rel":"parent_payment","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-0GP27740YY051761P/do-void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-0GP27740YY051761P/authorize","rel":"authorization","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-0GP27740YY051761P/capture","rel":"capture","method":"POST"}],"reason_code":"order"}}]}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-75S55092W03420906KP2LESA","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=235',
  'paypal-debug-id': '538e35c8de1b8',
  server_info: 'paymentsplatformserv:v1.payments.payment&CalThreadId=128&TopLevelTxnStartTime=147f42d6f04&Host=slcsbjm1.slc.paypal.com&pid=25157',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 16:08:45 GMT',
  'content-type': 'application/json',
  'content-length': '1933' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015Y2R1XrAU5HtkE.Wq1HLqhn1Vs1.jt9dNfTkYy265Xwc","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=665',
  'paypal-debug-id': '50d015461644d',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=5066&TopLevelTxnStartTime=147f491f9fd&Host=slcsbidensectoken502.slc.paypal.com&pid=26972',
  date: 'Wed, 20 Aug 2014 17:58:33 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/orders/O-1EW733634T317614V/authorize', {"amount":{"currency":"USD","total":"0.20"}})
  .reply(200, {"id":"26Y928264E6779523","create_time":"2014-08-20T17:58:34Z","update_time":"2014-08-20T17:58:34Z","amount":{"total":"0.20","currency":"USD"},"state":"authorized","parent_payment":"PAY-4NV23757M9828530DKP2N7XI","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-1EW733634T317614V","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/26Y928264E6779523/reauthorize","rel":"reauthorize","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/26Y928264E6779523","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/26Y928264E6779523/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/26Y928264E6779523/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-4NV23757M9828530DKP2N7XI","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=665',
  'paypal-debug-id': 'fba5acc01616e',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=246&TopLevelTxnStartTime=147f491fd2f&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 17:58:34 GMT',
  'content-type': 'application/json',
  'content-length': '954' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015rOcs1K782jdfig9xJr2D4CzeE7ysMS5gTt3eoGV.Ka0","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=525',
  'paypal-debug-id': 'c591a2fdfa0dd',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=115901&TopLevelTxnStartTime=147f50f0790&Host=slcsbidensectoken501.slc.paypal.com&pid=12608',
  date: 'Wed, 20 Aug 2014 20:15:10 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/orders/O-7A4605469K8426134/capture', {"amount":{"currency":"USD","total":"0.70"},"is_final_capture":true})
  .reply(200, {"id":"39802600CL031140H","create_time":"2014-08-20T20:15:10Z","update_time":"2014-08-20T20:15:11Z","amount":{"total":"0.70","currency":"USD"},"is_final_capture":true,"state":"completed","parent_payment":"PAY-2V41623380267390HKP2QAHI","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/capture/39802600CL031140H","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/capture/39802600CL031140H/refund","rel":"refund","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-7A4605469K8426134","rel":"order","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2V41623380267390HKP2QAHI","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=769',
  'paypal-debug-id': '5fcaf467fa2c3',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=269&TopLevelTxnStartTime=147f50f0ecd&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 20:15:11 GMT',
  'content-type': 'application/json',
  'content-length': '710' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015hfgsDFYb6ErGwwRxU8bHcZdHB8ymL-pF.l6wvfSYfJY","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=535',
  'paypal-debug-id': '2b2e01c5cdaf9',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=116871&TopLevelTxnStartTime=147f51c724d&Host=slcsbidensectoken502.slc.paypal.com&pid=26972',
  date: 'Wed, 20 Aug 2014 20:29:48 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/orders/O-1PL20702WE6290838/do-void', {})
  .reply(200, {"id":"O-1PL20702WE6290838","create_time":"2014-08-20T20:19:13Z","update_time":"2014-08-20T20:21:23Z","state":"voided","amount":{"total":"1.00","currency":"USD","details":{"subtotal":"1.00"}},"parent_payment":"PAY-69J29134LS9140105KP2QFQI","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/orders/O-6UR85601HU7666938","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-69J29134LS9140105KP2QFQI","rel":"parent_payment","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=835',
  'paypal-debug-id': '4b2064cecdf20',
  server_info: 'paymentsplatformserv:v1.payments.orders&CalThreadId=209&TopLevelTxnStartTime=147f51c7622&Host=slcsbjm1.slc.paypal.com&pid=25157',
  'content-language': '*',
  date: 'Wed, 20 Aug 2014 20:29:48 GMT',
  'content-type': 'application/json',
  'content-length': '488' });