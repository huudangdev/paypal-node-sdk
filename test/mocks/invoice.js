var nock = require('nock');

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, "{\"scope\":\"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card\",\"access_token\":\"0Hgfz4sbATR-EEchEUbj25DecnXyu.9S.4CbUxnUB-Y\",\"token_type\":\"Bearer\",\"app_id\":\"APP-2EJ531395M785864S\",\"expires_in\":28800}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=220',
  'paypal-debug-id': '80d01d1b689ee',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=76486&TopLevelTxnStartTime=145cde74deb&Host=slcsbidensectoken501.slc.paypal.com&pid=12305',
  'correlation-id': '80d01d1b689ee',
  date: 'Mon, 05 May 2014 19:40:59 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, "{\"id\":\"INV2-22J6-MZGR-66MQ-DW3C\",\"number\":\"1899\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":100.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=221',
  'paypal-debug-id': 'de395d3c694ac',
  date: 'Mon, 05 May 2014 19:40:59 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-22J6-MZGR-66MQ-DW3C',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/invoicing/invoices/INV2-22J6-MZGR-66MQ-DW3C')
  .reply(200, "{\"id\":\"INV2-22J6-MZGR-66MQ-DW3C\",\"number\":\"1899\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":100.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:41:00 PDT\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=7224',
  'paypal-debug-id': '878f142969b5e',
  date: 'Mon, 05 May 2014 19:41:00 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/invoicing/invoices/ABRACADABRA')
  .reply(500, "{\"name\":\"BUSINESS_ERROR\",\"message\":\"Invalid encrypted id.\",\"debug_id\":\"b99c790e6923e\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=221',
  'paypal-debug-id': 'b99c790e6923e',
  date: 'Mon, 05 May 2014 19:41:01 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/invoicing/invoices')
  .reply(200, "{\"invoices\":[{\"id\":\"INV2-QNNC-SGV2-MVKT-EC4J\",\"number\":\"1898\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:40 PDT\"}},{\"id\":\"INV2-HV5A-TEDJ-CFMG-32UD\",\"number\":\"1897\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:36 PDT\"}},{\"id\":\"INV2-3PCB-ZZ8R-LDQK-5594\",\"number\":\"1896\",\"status\":\"CANCELLED\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:34 PDT\"}},{\"id\":\"INV2-NDUW-LLLQ-2S4N-V72P\",\"number\":\"1895\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:32 PDT\"}},{\"id\":\"INV2-MGQ9-FMLT-Y9VV-82PT\",\"number\":\"1894\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:30 PDT\"}},{\"id\":\"INV2-CA5H-ZFNE-QZAY-RGET\",\"number\":\"1893\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\"},\"invoice_date\":\"2014-05-05 PDT\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"0.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:29 PDT\"}},{\"id\":\"INV2-7QNA-T4PK-G9ZY-7QJ8\",\"number\":\"1892\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:27 PDT\"}},{\"id\":\"INV2-R8ZL-7VRW-7YM2-A67U\",\"number\":\"1891\",\"status\":\"CANCELLED\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:24 PDT\"}},{\"id\":\"INV2-QKJB-3YXY-DRP8-MC7K\",\"number\":\"1890\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:21 PDT\"}},{\"id\":\"INV2-CQG8-ZCLK-VBH7-32AQ\",\"number\":\"1889\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:20 PDT\"}},{\"id\":\"INV2-EHP5-GP77-Y4TV-VDY8\",\"number\":\"1888\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:39:17 PDT\"}},{\"id\":\"INV2-LJNQ-D9CB-4QF6-8Y7X\",\"number\":\"1887\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:43 PDT\"}},{\"id\":\"INV2-Q7EJ-FD5H-AJGE-C3LK\",\"number\":\"1886\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:40 PDT\"}},{\"id\":\"INV2-G2ER-SGCW-AVWE-BCGC\",\"number\":\"1885\",\"status\":\"CANCELLED\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:39 PDT\"}},{\"id\":\"INV2-V2SX-33RM-CYYQ-M3EX\",\"number\":\"1884\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:38 PDT\"}},{\"id\":\"INV2-4GLR-66YA-9QFJ-NZWT\",\"number\":\"1883\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:36 PDT\"}},{\"id\":\"INV2-VDZV-TDJ2-2NVV-YFNB\",\"number\":\"1882\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\"},\"invoice_date\":\"2014-05-05 PDT\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"0.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:35 PDT\"}},{\"id\":\"INV2-JKKB-VN2P-CW5N-FAGN\",\"number\":\"1881\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:34 PDT\"}},{\"id\":\"INV2-49MR-24LV-QNFS-C5DG\",\"number\":\"1880\",\"status\":\"CANCELLED\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:33 PDT\"}},{\"id\":\"INV2-Q2Z5-3XNJ-M85N-LKMV\",\"number\":\"1879\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\",\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\"},\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"due_date\":\"2014-06-19 PDT\"},\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:25:31 PDT\"}}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=813',
  'paypal-debug-id': '21f944e763218',
  date: 'Mon, 05 May 2014 19:41:02 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/search', {"start_invoice_date":"2010-05-10 PST","end_invoice_date":"2014-04-10 PST","page":1,"page_size":3,"total_count_required":true})
  .reply(200, "{\"total_count\":23,\"invoices\":[{\"id\":\"INV2-NXYL-SBTM-Q9H2-NNZQ\",\"number\":\"0023\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\"},\"invoice_date\":\"2014-04-04 PDT\",\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"500.00\"},\"metadata\":{\"created_date\":\"2014-04-04 02:39:07 PDT\"}},{\"id\":\"INV2-TMFM-PKGP-KMJ3-5RMA\",\"number\":\"0022\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\"},\"invoice_date\":\"2014-04-04 PDT\",\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"500.00\"},\"metadata\":{\"created_date\":\"2014-04-04 02:39:03 PDT\"}},{\"id\":\"INV2-KH6H-FVJH-QF23-VZX6\",\"number\":\"0021\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"email\":\"example@example.com\"},\"invoice_date\":\"2014-04-04 PDT\",\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"500.00\"},\"metadata\":{\"created_date\":\"2014-04-04 02:38:22 PDT\"}}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=7224',
  'paypal-debug-id': '67b34fcd69485',
  date: 'Mon, 05 May 2014 19:41:03 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, "{\"id\":\"INV2-5CQQ-2CSB-4ZZ3-QSZE\",\"number\":\"1900\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":100.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=7224',
  'paypal-debug-id': '1fe9cabb69683',
  date: 'Mon, 05 May 2014 19:41:03 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-5CQQ-2CSB-4ZZ3-QSZE',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .put('/v1/invoicing/invoices/INV2-5CQQ-2CSB-4ZZ3-QSZE', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(200, "{\"id\":\"INV2-5CQQ-2CSB-4ZZ3-QSZE\",\"number\":\"1900\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=221',
  'paypal-debug-id': '76e049c56a50b',
  date: 'Mon, 05 May 2014 19:41:04 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-GUYX-XMDN-575V-5V8S\",\"number\":\"1901\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1172',
  'paypal-debug-id': '2170a0db6a2ac',
  date: 'Mon, 05 May 2014 19:41:05 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-GUYX-XMDN-575V-5V8S',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-GUYX-XMDN-575V-5V8S/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=221',
  'paypal-debug-id': '4a55de006a30e',
  date: 'Mon, 05 May 2014 19:41:05 GMT',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .put('/v1/invoicing/invoices/INV2-GUYX-XMDN-575V-5V8S', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(200, "{\"id\":\"INV2-GUYX-XMDN-575V-5V8S\",\"number\":\"1901\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=221',
  'paypal-debug-id': '8294647f6ad62',
  date: 'Mon, 05 May 2014 19:41:05 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-WT8A-4BZ5-BX75-S86L\",\"number\":\"1902\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=273',
  'paypal-debug-id': '48b6e1976094a',
  date: 'Mon, 05 May 2014 19:41:07 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-WT8A-4BZ5-BX75-S86L',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-WT8A-4BZ5-BX75-S86L/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=273',
  'paypal-debug-id': '1774d4b661522',
  date: 'Mon, 05 May 2014 19:41:07 GMT',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-WT8A-4BZ5-BX75-S86L/cancel', {"subject":"Past due","note":"Canceling invoice","send_to_merchant":true,"send_to_payer":true})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=224',
  'paypal-debug-id': '6d237ebc6b5e4',
  date: 'Mon, 05 May 2014 19:41:09 GMT' });

nock('https://api.sandbox.paypal.com:443:443')
  .put('/v1/invoicing/invoices/INV2-WT8A-4BZ5-BX75-S86L', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(500, "{\"name\":\"BUSINESS_ERROR\",\"message\":\"Already paid/refund/cancelled.\",\"debug_id\":\"efe6dc166bd91\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=7224',
  'paypal-debug-id': 'efe6dc166bd91',
  date: 'Mon, 05 May 2014 19:41:09 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-3H7M-GHA8-NB7Q-U36C\",\"number\":\"1903\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=7224',
  'paypal-debug-id': 'dc8f41916bf7c',
  date: 'Mon, 05 May 2014 19:41:09 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-3H7M-GHA8-NB7Q-U36C',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-3H7M-GHA8-NB7Q-U36C/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=7224',
  'paypal-debug-id': 'e05743c86b157',
  date: 'Mon, 05 May 2014 19:41:10 GMT',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/invoicing/invoices/INV2-3H7M-GHA8-NB7Q-U36C')
  .reply(200, "{\"id\":\"INV2-3H7M-GHA8-NB7Q-U36C\",\"number\":\"1903\",\"status\":\"SENT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:41:10 PDT\",\"first_sent_date\":\"2014-05-05 12:41:10 PDT\",\"last_sent_date\":\"2014-05-05 12:41:10 PDT\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=273',
  'paypal-debug-id': 'a01cb27961e40',
  date: 'Mon, 05 May 2014 19:41:11 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor"},"billing_info":[{"email":"example@example.com"}]})
  .reply(201, "{\"id\":\"INV2-GL3K-7ERV-P282-JGVP\",\"number\":\"1904\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\"},\"billing_info\":[{\"email\":\"example@example.com\"}],\"invoice_date\":\"2014-05-05 PDT\",\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"total_amount\":{\"currency\":\"USD\",\"value\":\"0.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=273',
  'paypal-debug-id': '8f2683c361bbf',
  date: 'Mon, 05 May 2014 19:41:11 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-GL3K-7ERV-P282-JGVP',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-GL3K-7ERV-P282-JGVP/send', {})
  .reply(400, "{\"name\":\"VALIDATION_ERROR\",\"message\":\"Invalid request - see details.\",\"debug_id\":\"89c20bf16462e\",\"details\":[{\"field\":\"items\",\"issue\":\"cannot be null or, empty.\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=224',
  'paypal-debug-id': '89c20bf16462e',
  date: 'Mon, 05 May 2014 19:41:11 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-8TK7-PL4Q-6XYU-UV7W\",\"number\":\"1905\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=220',
  'paypal-debug-id': 'df73333b6467b',
  date: 'Mon, 05 May 2014 19:41:13 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-8TK7-PL4Q-6XYU-UV7W',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-8TK7-PL4Q-6XYU-UV7W/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=237',
  'paypal-debug-id': 'bf6fbac064c1c',
  date: 'Mon, 05 May 2014 19:41:12 GMT',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-8TK7-PL4Q-6XYU-UV7W/remind', {"subject":"Past due","note":"Please pay soon","send_to_merchant":true})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=228',
  'paypal-debug-id': '7d6502b06411d',
  date: 'Mon, 05 May 2014 19:41:14 GMT',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-C9KD-YYC6-AYZU-G76N\",\"number\":\"1906\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=228',
  'paypal-debug-id': 'b9acdd8764cd3',
  date: 'Mon, 05 May 2014 19:41:15 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-C9KD-YYC6-AYZU-G76N',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-C9KD-YYC6-AYZU-G76N/remind', {"subject":"Past due","note":"Please pay soon","send_to_merchant":true})
  .reply(500, "{\"name\":\"BUSINESS_ERROR\",\"message\":\"Cannot send reminder for a draft.\",\"debug_id\":\"c64ffdd264642\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=237',
  'paypal-debug-id': 'c64ffdd264642',
  date: 'Mon, 05 May 2014 19:41:16 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-D73F-M3Y2-SFT5-4CAF\",\"number\":\"1907\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=228',
  'paypal-debug-id': '2f59563365676',
  date: 'Mon, 05 May 2014 19:41:16 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-D73F-M3Y2-SFT5-4CAF',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-D73F-M3Y2-SFT5-4CAF/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=228',
  'paypal-debug-id': '3ba09fa66553e',
  date: 'Mon, 05 May 2014 19:41:16 GMT',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-D73F-M3Y2-SFT5-4CAF/cancel', {"subject":"Past due","note":"Canceling invoice","send_to_merchant":true,"send_to_payer":true})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=220',
  'paypal-debug-id': 'c07619cd652ba',
  date: 'Mon, 05 May 2014 19:41:18 GMT' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/invoicing/invoices/INV2-D73F-M3Y2-SFT5-4CAF')
  .reply(200, "{\"id\":\"INV2-D73F-M3Y2-SFT5-4CAF\",\"number\":\"1907\",\"status\":\"CANCELLED\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"},\"metadata\":{\"created_date\":\"2014-05-05 12:41:16 PDT\",\"cancelled_date\":\"2014-05-05 12:41:18 PDT\",\"first_sent_date\":\"2014-05-05 12:41:17 PDT\",\"last_sent_date\":\"2014-05-05 12:41:17 PDT\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=220',
  'paypal-debug-id': '64e652e065ca0',
  date: 'Mon, 05 May 2014 19:41:18 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-7PCR-YHS9-8WJA-2WEN\",\"number\":\"1908\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=273',
  'paypal-debug-id': 'b77d8c216fe94',
  date: 'Mon, 05 May 2014 19:41:19 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-7PCR-YHS9-8WJA-2WEN',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-7PCR-YHS9-8WJA-2WEN/cancel', {"subject":"Past due","note":"Canceling invoice","send_to_merchant":true,"send_to_payer":true})
  .reply(500, "{\"name\":\"BUSINESS_ERROR\",\"message\":\"Cannot cancel a draft entity.\",\"debug_id\":\"c97d72d36f871\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=273',
  'paypal-debug-id': 'c97d72d36f871',
  date: 'Mon, 05 May 2014 19:41:19 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-4QJ5-X57Q-DYYF-8NTZ\",\"number\":\"1909\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=228',
  'paypal-debug-id': '44c6754965922',
  date: 'Mon, 05 May 2014 19:41:20 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-4QJ5-X57Q-DYYF-8NTZ',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .delete('/v1/invoicing/invoices/INV2-4QJ5-X57Q-DYYF-8NTZ', {})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=221',
  'paypal-debug-id': 'c30529f0665d3',
  date: 'Mon, 05 May 2014 19:41:20 GMT' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/invoicing/invoices/INV2-4QJ5-X57Q-DYYF-8NTZ')
  .reply(500, "{\"name\":\"BUSINESS_ERROR\",\"message\":\"Resource is already deleted.\",\"debug_id\":\"61755a396c1c4\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=813',
  'paypal-debug-id': '61755a396c1c4',
  date: 'Mon, 05 May 2014 19:41:21 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, "{\"id\":\"INV2-B7WN-XYWC-RR3T-ADG6\",\"number\":\"1909\",\"status\":\"DRAFT\",\"merchant_info\":{\"email\":\"PPX.DevNet-facilitator@gmail.com\",\"first_name\":\"Dennis\",\"last_name\":\"Doctor\",\"business_name\":\"Medical Professionals, LLC\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5032141716\"},\"address\":{\"line1\":\"1234 Main St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97217\",\"country_code\":\"US\"}},\"billing_info\":[{\"email\":\"example@example.com\"}],\"shipping_info\":{\"first_name\":\"Sally\",\"last_name\":\"Patient\",\"business_name\":\"Not applicable\",\"phone\":{\"country_code\":\"1\",\"national_number\":\"5039871234\"},\"address\":{\"line1\":\"1234 Broad St.\",\"city\":\"Portland\",\"state\":\"OR\",\"postal_code\":\"97216\",\"country_code\":\"US\"}},\"items\":[{\"name\":\"Sutures\",\"quantity\":500.0,\"unit_price\":{\"currency\":\"USD\",\"value\":\"5.00\"}}],\"invoice_date\":\"2014-05-05 PDT\",\"payment_term\":{\"term_type\":\"NET_45\",\"due_date\":\"2014-06-19 PDT\"},\"tax_calculated_after_discount\":false,\"tax_inclusive\":false,\"note\":\"Medical Invoice 16 Jul, 2013 PST\",\"total_amount\":{\"currency\":\"USD\",\"value\":\"2500.00\"}}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=221',
  'paypal-debug-id': 'f8672fc9661d6',
  date: 'Mon, 05 May 2014 19:41:21 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-B7WN-XYWC-RR3T-ADG6',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/invoicing/invoices/INV2-B7WN-XYWC-RR3T-ADG6/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3218',
  'paypal-debug-id': 'aa9354a1660ef',
  date: 'Mon, 05 May 2014 19:41:22 GMT',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .delete('/v1/invoicing/invoices/INV2-B7WN-XYWC-RR3T-ADG6', {})
  .reply(500, "{\"name\":\"BUSINESS_ERROR\",\"message\":\"Only draft can be deleted.\",\"debug_id\":\"453107af662c6\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3218',
  'paypal-debug-id': '453107af662c6',
  date: 'Mon, 05 May 2014 19:41:22 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });