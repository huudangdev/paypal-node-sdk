var nock = require('nock');

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A0150D25YheAsbQLt0TMCraUZevO5rBV4pKeoNqpMv9KqoU","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2676',
  'paypal-debug-id': '986af3d0d29c6',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=23778&TopLevelTxnStartTime=147c11dda7e&Host=slcsbidensectoken501.slc.paypal.com&pid=22315',
  date: 'Sun, 10 Aug 2014 18:11:05 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, {"id":"INV2-TYYN-N7KW-Y4A6-5KR3","number":"2241","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
  'paypal-debug-id': '47cfef71d28dc',
  date: 'Sun, 10 Aug 2014 18:11:06 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-TYYN-N7KW-Y4A6-5KR3',
  'content-type': 'application/json',
  'content-length': '1041' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/invoicing/invoices/INV2-TYYN-N7KW-Y4A6-5KR3')
  .reply(200, {"id":"INV2-TYYN-N7KW-Y4A6-5KR3","number":"2241","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"},"metadata":{"created_date":"2014-08-10 11:11:06 PDT"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
  'paypal-debug-id': '0bd93dccd1588',
  date: 'Sun, 10 Aug 2014 18:11:06 GMT',
  'content-type': 'application/json',
  'content-length': '1095' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/invoicing/invoices/ABRACADABRA')
  .reply(500, {"name":"BUSINESS_ERROR","message":"Invalid encrypted id.","debug_id":"f31854cbd10a3"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2680',
  'paypal-debug-id': 'f31854cbd10a3',
  date: 'Sun, 10 Aug 2014 18:11:07 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '86' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/invoicing/invoices/')
  .reply(200, {"invoices":[{"id":"INV2-UPYF-49RC-P6MN-VXAU","number":"2240","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:43 PDT"}},{"id":"INV2-3MG7-9RRU-AAW7-MYQY","number":"2239","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:40 PDT"}},{"id":"INV2-SY3A-BHMH-D8KZ-MD4N","number":"2238","status":"CANCELLED","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:37 PDT"}},{"id":"INV2-BNCS-WCPK-JUPN-5ZWP","number":"2237","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:35 PDT"}},{"id":"INV2-8C63-8MUX-6F4U-J592","number":"2236","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:33 PDT"}},{"id":"INV2-9N2E-PYZM-2U6S-ZJW4","number":"2235","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com"},"invoice_date":"2014-08-10 PDT","total_amount":{"currency":"USD","value":"0.00"},"metadata":{"created_date":"2014-08-10 11:09:31 PDT"}},{"id":"INV2-828P-TW2F-Q6E9-TLKR","number":"2234","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:29 PDT"}},{"id":"INV2-J6J8-YG2N-XMF4-U9WE","number":"2233","status":"CANCELLED","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:24 PDT"}},{"id":"INV2-UAFV-E69M-XBDR-BN7Q","number":"2232","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:21 PDT"}},{"id":"INV2-94B9-YCHL-K2E2-59K2","number":"2231","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:09:20 PDT"}},{"id":"INV2-V3GZ-4EPS-C9HA-UJ5G","number":"2230","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-10 PDT","payment_term":{"due_date":"2014-09-24 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"},"metadata":{"created_date":"2014-08-10 11:09:15 PDT"}},{"id":"INV2-9VM9-PVF3-KAQ2-LZ2D","number":"2229","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-08 PDT","payment_term":{"due_date":"2014-09-22 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-08 09:23:10 PDT"}},{"id":"INV2-SPAG-UMEU-DZSA-4HFM","number":"2228","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-08 PDT","payment_term":{"due_date":"2014-09-22 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-08 09:23:07 PDT"}},{"id":"INV2-Y7KD-CX7M-KJH4-L43K","number":"2227","status":"CANCELLED","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-08 PDT","payment_term":{"due_date":"2014-09-22 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-08 09:23:04 PDT"}},{"id":"INV2-UBQ5-69EG-KBYA-CATL","number":"2226","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-08 PDT","payment_term":{"due_date":"2014-09-22 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-08 09:23:03 PDT"}},{"id":"INV2-ADY2-QG5P-GEFW-KYHB","number":"2225","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-08 PDT","payment_term":{"due_date":"2014-09-22 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-08 09:23:01 PDT"}},{"id":"INV2-YWF6-78HJ-VWEH-HDT3","number":"2224","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com"},"invoice_date":"2014-08-08 PDT","total_amount":{"currency":"USD","value":"0.00"},"metadata":{"created_date":"2014-08-08 09:22:59 PDT"}},{"id":"INV2-ABG4-7KFB-VWL6-6Q3A","number":"2223","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-08 PDT","payment_term":{"due_date":"2014-09-22 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-08 09:22:58 PDT"}},{"id":"INV2-45KK-6WD8-NDXD-FN89","number":"2222","status":"CANCELLED","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-08 PDT","payment_term":{"due_date":"2014-09-22 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-08 09:22:55 PDT"}},{"id":"INV2-RULR-WU9D-34CG-6MNC","number":"2221","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com","first_name":"Sally","last_name":"Patient","business_name":"Not applicable"},"invoice_date":"2014-08-08 PDT","payment_term":{"due_date":"2014-09-22 PDT"},"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-08 09:22:53 PDT"}}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': '11fd77cad163b',
  date: 'Sun, 10 Aug 2014 18:11:07 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/search', {"start_invoice_date":"2010-05-10 PST","end_invoice_date":"2014-04-10 PST","page":1,"page_size":3,"total_count_required":true})
  .reply(200, {"total_count":23,"invoices":[{"id":"INV2-NXYL-SBTM-Q9H2-NNZQ","number":"0023","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com"},"invoice_date":"2014-04-04 PDT","note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"},"metadata":{"created_date":"2014-04-04 02:39:07 PDT"}},{"id":"INV2-TMFM-PKGP-KMJ3-5RMA","number":"0022","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com"},"invoice_date":"2014-04-04 PDT","note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"},"metadata":{"created_date":"2014-04-04 02:39:03 PDT"}},{"id":"INV2-KH6H-FVJH-QF23-VZX6","number":"0021","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com"},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"email":"example@example.com"},"invoice_date":"2014-04-04 PDT","note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"},"metadata":{"created_date":"2014-04-04 02:38:22 PDT"}}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2680',
  'paypal-debug-id': '15111bacd1ab9',
  date: 'Sun, 10 Aug 2014 18:11:08 GMT',
  'content-type': 'application/json',
  'content-length': '1243' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, {"id":"INV2-VFMD-VSLK-FEPS-BPM3","number":"2242","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': 'c33b6426d03da',
  date: 'Sun, 10 Aug 2014 18:11:10 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-VFMD-VSLK-FEPS-BPM3',
  'content-type': 'application/json',
  'content-length': '1041' });

nock('https://api.sandbox.paypal.com')
  .put('/v1/invoicing/invoices/INV2-VFMD-VSLK-FEPS-BPM3', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(200, {"id":"INV2-VFMD-VSLK-FEPS-BPM3","number":"2242","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
  'paypal-debug-id': '5c6843b5d0676',
  date: 'Sun, 10 Aug 2014 18:11:11 GMT',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-HL4R-B4XA-GGZF-49CP","number":"2243","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=280',
  'paypal-debug-id': '8c8d314dd0cfe',
  date: 'Sun, 10 Aug 2014 18:11:12 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-HL4R-B4XA-GGZF-49CP',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-HL4R-B4XA-GGZF-49CP/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=280',
  'paypal-debug-id': 'fab7a298d03c1',
  date: 'Sun, 10 Aug 2014 18:11:12 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .put('/v1/invoicing/invoices/INV2-HL4R-B4XA-GGZF-49CP', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(200, {"id":"INV2-HL4R-B4XA-GGZF-49CP","number":"2243","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': '67753a7ed0f33',
  date: 'Sun, 10 Aug 2014 18:11:14 GMT',
  'content-type': 'application/json',
  'content-length': '1041' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-4FG4-V5SM-GHMF-YW2T","number":"2244","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': 'aa9ddcccef211',
  date: 'Sun, 10 Aug 2014 18:11:16 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-4FG4-V5SM-GHMF-YW2T',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-4FG4-V5SM-GHMF-YW2T/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1582',
  'paypal-debug-id': 'a92d33efef265',
  date: 'Sun, 10 Aug 2014 18:11:17 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-4FG4-V5SM-GHMF-YW2T/cancel', {"subject":"Past due","note":"Canceling invoice","send_to_merchant":true,"send_to_payer":true})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2676',
  'paypal-debug-id': 'f0dfcdb1ef878',
  date: 'Sun, 10 Aug 2014 18:11:17 GMT' });

nock('https://api.sandbox.paypal.com')
  .put('/v1/invoicing/invoices/INV2-4FG4-V5SM-GHMF-YW2T', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(500, {"name":"BUSINESS_ERROR","message":"Already paid/refund/cancelled.","debug_id":"592eab05efb69"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
  'paypal-debug-id': '592eab05efb69',
  date: 'Sun, 10 Aug 2014 18:11:17 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '95' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-HN5C-MZRJ-WK8D-H7QK","number":"2245","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1582',
  'paypal-debug-id': 'f3168ea6eebe1',
  date: 'Sun, 10 Aug 2014 18:11:19 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-HN5C-MZRJ-WK8D-H7QK',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-HN5C-MZRJ-WK8D-H7QK/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
  'paypal-debug-id': '5b143a66ee13a',
  date: 'Sun, 10 Aug 2014 18:11:20 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/invoicing/invoices/INV2-HN5C-MZRJ-WK8D-H7QK')
  .reply(200, {"id":"INV2-HN5C-MZRJ-WK8D-H7QK","number":"2245","status":"SENT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:11:19 PDT","first_sent_date":"2014-08-10 11:11:20 PDT","last_sent_date":"2014-08-10 11:11:20 PDT"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': 'f8636d33ee4a3',
  date: 'Sun, 10 Aug 2014 18:11:20 GMT',
  'content-type': 'application/json',
  'content-length': '1182' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor"},"billing_info":[{"email":"example@example.com"}]})
  .reply(201, {"id":"INV2-DL7A-Z7H5-GSWN-NY5U","number":"2246","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor"},"billing_info":[{"email":"example@example.com"}],"invoice_date":"2014-08-10 PDT","tax_calculated_after_discount":false,"tax_inclusive":false,"total_amount":{"currency":"USD","value":"0.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': '8d374c5aee9df',
  date: 'Sun, 10 Aug 2014 18:11:20 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-DL7A-Z7H5-GSWN-NY5U',
  'content-type': 'application/json',
  'content-length': '360' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-DL7A-Z7H5-GSWN-NY5U/send', {})
  .reply(400, {"name":"VALIDATION_ERROR","message":"Invalid request - see details.","debug_id":"72d7b28feee33","details":[{"field":"items","issue":"cannot be null or, empty."}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2676',
  'paypal-debug-id': '72d7b28feee33',
  date: 'Sun, 10 Aug 2014 18:11:22 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '163' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-B7EM-NUH7-4M78-MFEC","number":"2247","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2676',
  'paypal-debug-id': '568aed8ced39a',
  date: 'Sun, 10 Aug 2014 18:11:22 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-B7EM-NUH7-4M78-MFEC',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-B7EM-NUH7-4M78-MFEC/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': 'ff19bf1eed038',
  date: 'Sun, 10 Aug 2014 18:11:24 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-B7EM-NUH7-4M78-MFEC/remind', {"subject":"Past due","note":"Please pay soon","send_to_merchant":true})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': '430ed201ed42c',
  date: 'Sun, 10 Aug 2014 18:11:24 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-P9T6-PRPG-SDXT-GH3G","number":"2248","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1582',
  'paypal-debug-id': 'f7f24112ed071',
  date: 'Sun, 10 Aug 2014 18:11:25 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-P9T6-PRPG-SDXT-GH3G',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-P9T6-PRPG-SDXT-GH3G/remind', {"subject":"Past due","note":"Please pay soon","send_to_merchant":true})
  .reply(500, {"name":"BUSINESS_ERROR","message":"Cannot send reminder for a draft.","debug_id":"77015ee2edb6a"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2732',
  'paypal-debug-id': '77015ee2edb6a',
  date: 'Sun, 10 Aug 2014 18:11:26 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '98' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-QLVZ-PMK5-WFYL-YCRS","number":"2249","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2680',
  'paypal-debug-id': '0b79e89aec37a',
  date: 'Sun, 10 Aug 2014 18:11:26 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-QLVZ-PMK5-WFYL-YCRS',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-QLVZ-PMK5-WFYL-YCRS/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': '64e6426aec725',
  date: 'Sun, 10 Aug 2014 18:11:28 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-QLVZ-PMK5-WFYL-YCRS/cancel', {"subject":"Past due","note":"Canceling invoice","send_to_merchant":true,"send_to_payer":true})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2680',
  'paypal-debug-id': '9d1a0a90ecbdf',
  date: 'Sun, 10 Aug 2014 18:11:29 GMT' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/invoicing/invoices/INV2-QLVZ-PMK5-WFYL-YCRS')
  .reply(200, {"id":"INV2-QLVZ-PMK5-WFYL-YCRS","number":"2249","status":"CANCELLED","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"},"metadata":{"created_date":"2014-08-10 11:11:27 PDT","cancelled_date":"2014-08-10 11:11:29 PDT","first_sent_date":"2014-08-10 11:11:28 PDT","last_sent_date":"2014-08-10 11:11:28 PDT"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2732',
  'paypal-debug-id': '853304e9ecf0e',
  date: 'Sun, 10 Aug 2014 18:11:29 GMT',
  'content-type': 'application/json',
  'content-length': '1230' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-MYRA-4CNZ-BMGP-6FLZ","number":"2250","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1582',
  'paypal-debug-id': '36cd3802ec67d',
  date: 'Sun, 10 Aug 2014 18:11:31 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-MYRA-4CNZ-BMGP-6FLZ',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-MYRA-4CNZ-BMGP-6FLZ/cancel', {"subject":"Past due","note":"Canceling invoice","send_to_merchant":true,"send_to_payer":true})
  .reply(405, {"name":"BUSINESS_ERROR","message":"Cannot cancel a draft entity.","debug_id":"8eaa0811eb957"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1582',
  'paypal-debug-id': '8eaa0811eb957',
  date: 'Sun, 10 Aug 2014 18:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '94' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-6CKU-Q5ND-NXHS-42U8","number":"2251","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': 'eaff2dc1eb6ea',
  date: 'Sun, 10 Aug 2014 18:11:32 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-6CKU-Q5ND-NXHS-42U8',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .delete('/v1/invoicing/invoices/INV2-6CKU-Q5ND-NXHS-42U8', {})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2732',
  'paypal-debug-id': '4a477616ebc5b',
  date: 'Sun, 10 Aug 2014 18:11:33 GMT' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/invoicing/invoices/INV2-6CKU-Q5ND-NXHS-42U8')
  .reply(410, {"name":"BUSINESS_ERROR","message":"Resource is already deleted.","debug_id":"ea7b7a4eeb84d"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2676',
  'paypal-debug-id': 'ea7b7a4eeb84d',
  date: 'Sun, 10 Aug 2014 18:11:34 GMT',
  'content-type': 'application/json',
  'content-length': '93' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"2500.00"}})
  .reply(201, {"id":"INV2-AKAD-TXPF-GEMW-Y5HW","number":"2251","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"1","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"1","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":500,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-08-10 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-09-24 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"2500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=3082',
  'paypal-debug-id': 'd42cd741ebebb',
  date: 'Sun, 10 Aug 2014 18:11:34 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-AKAD-TXPF-GEMW-Y5HW',
  'content-type': 'application/json',
  'content-length': '1042' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-AKAD-TXPF-GEMW-Y5HW/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1582',
  'paypal-debug-id': 'dbfae435eaa2d',
  date: 'Sun, 10 Aug 2014 18:11:35 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .delete('/v1/invoicing/invoices/INV2-AKAD-TXPF-GEMW-Y5HW', {})
  .reply(405, {"name":"BUSINESS_ERROR","message":"Only draft can be deleted.","debug_id":"d29f04c6eaeb3"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=1582',
  'paypal-debug-id': 'd29f04c6eaeb3',
  date: 'Sun, 10 Aug 2014 18:11:35 GMT',
  'content-type': 'application/json',
  'content-length': '91' });

nock('https://api.sandbox.paypal.com')
  .delete('/v1/invoicing/invoices/INV2-333R-YUQL-YNNN-D7WF/refund-records/EXTR-2LG703375E477444T', {})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2732',
  'paypal-debug-id': '4a477616ebc5b',
  date: 'Sun, 10 Aug 2014 18:11:33 GMT' });

nock('https://api.sandbox.paypal.com')
  .delete('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/payment-records/1', {})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2732',
  'paypal-debug-id': '4a477616ebc5b',
  date: 'Sun, 10 Aug 2014 18:11:33 GMT' });
