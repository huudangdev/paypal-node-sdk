var nock = require('nock');

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015JxFyBnRSC8TzCusSLn7qAPyRek1JsYN7CkDtPnkG34k","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=25790',
  'paypal-debug-id': 'ae9b520697e11',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=91&TopLevelTxnStartTime=14836dabbe2&Host=slcsbidensectoken502.slc.paypal.com&pid=16915',
  date: 'Tue, 02 Sep 2014 14:52:57 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, {"id":"INV2-E935-Q8M6-DEFW-5R94","number":"2332","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-09-02 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-10-17 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=25790',
  'paypal-debug-id': '7add28d197ba9',
  date: 'Tue, 02 Sep 2014 14:52:57 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-E935-Q8M6-DEFW-5R94',
  'content-type': 'application/json',
  'content-length': '1045' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-E935-Q8M6-DEFW-5R94/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=325',
  'paypal-debug-id': 'fdeaf7b19097f',
  date: 'Tue, 02 Sep 2014 14:52:59 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/invoicing/invoices/INV2-E935-Q8M6-DEFW-5R94/qr-code?height=400&width=400')
  .reply(200, {"image":"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"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=325',
  'paypal-debug-id': '0a1a0f9490a52',
  date: 'Tue, 02 Sep 2014 14:52:59 GMT',
  'content-type': 'application/json',
  'content-length': '3544' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015PYOUAEv.kprl8wDDp.Cgk.ZiX1ZJuogzQC9qpiA00sE","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=243',
  'paypal-debug-id': 'ac008956b30fe',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=2262&TopLevelTxnStartTime=14836d8f61d&Host=slcsbidensectoken501.slc.paypal.com&pid=26104',
  date: 'Tue, 02 Sep 2014 14:51:01 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, {"id":"INV2-7NKZ-2GYF-6HY6-ZVZ6","number":"2331","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-09-02 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-10-17 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=243',
  'paypal-debug-id': 'b8e2fb15b3e0f',
  date: 'Tue, 02 Sep 2014 14:51:02 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-7NKZ-2GYF-6HY6-ZVZ6',
  'content-type': 'application/json',
  'content-length': '1045' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-7NKZ-2GYF-6HY6-ZVZ6/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=273',
  'paypal-debug-id': '4f49d3b4b323a',
  date: 'Tue, 02 Sep 2014 14:51:03 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-7NKZ-2GYF-6HY6-ZVZ6/record-payment', {"method":"CASH","date":"2014-07-06 03:30:00 PST","note":"Cash received."})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=315',
  'paypal-debug-id': '57a9a309b3be9',
  date: 'Tue, 02 Sep 2014 14:51:02 GMT' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015h5DYK40eUh80-aB2XraaHHrhVdTNgLSG6JOixFJsDFQ","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=34406',
  'paypal-debug-id': 'af3de8f365716',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=90&TopLevelTxnStartTime=14836d593d3&Host=slcsbidensectoken501.slc.paypal.com&pid=26104',
  date: 'Tue, 02 Sep 2014 14:47:20 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, {"id":"INV2-WNVY-RKWC-46V4-2KJV","number":"2328","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-09-02 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-10-17 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=284',
  'paypal-debug-id': '122e35a165eb4',
  date: 'Tue, 02 Sep 2014 14:47:20 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV',
  'content-type': 'application/json',
  'content-length': '1045' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=34406',
  'paypal-debug-id': 'ba3faecb65edc',
  date: 'Tue, 02 Sep 2014 14:47:21 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/record-payment', {"method":"CASH","date":"2014-07-06 03:30:00 PST","note":"Cash received."})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=252',
  'paypal-debug-id': 'c0bba21c65a8e',
  date: 'Tue, 02 Sep 2014 14:47:22 GMT' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/record-refund', {"date":"2014-07-06 03:30:00 PST","note":"Refund provided by cash."})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=284',
  'paypal-debug-id': 'a939029c657a4',
  date: 'Tue, 02 Sep 2014 14:47:22 GMT' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015h5DYK40eUh80-aB2XraaHHrhVdTNgLSG6JOixFJsDFQ","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=34406',
  'paypal-debug-id': 'af3de8f365716',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=90&TopLevelTxnStartTime=14836d593d3&Host=slcsbidensectoken501.slc.paypal.com&pid=26104',
  date: 'Tue, 02 Sep 2014 14:47:20 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, {"id":"INV2-WNVY-RKWC-46V4-2KJV","number":"2328","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-09-02 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-10-17 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=284',
  'paypal-debug-id': '122e35a165eb4',
  date: 'Tue, 02 Sep 2014 14:47:20 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV',
  'content-type': 'application/json',
  'content-length': '1045' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=34406',
  'paypal-debug-id': 'ba3faecb65edc',
  date: 'Tue, 02 Sep 2014 14:47:21 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/record-payment', {"method":"CASH","date":"2014-07-06 03:30:00 PST","note":"Cash received."})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=252',
  'paypal-debug-id': 'c0bba21c65a8e',
  date: 'Tue, 02 Sep 2014 14:47:22 GMT' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015h5DYK40eUh80-aB2XraaHHrhVdTNgLSG6JOixFJsDFQ","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=34406',
  'paypal-debug-id': 'af3de8f365716',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=90&TopLevelTxnStartTime=14836d593d3&Host=slcsbidensectoken501.slc.paypal.com&pid=26104',
  date: 'Tue, 02 Sep 2014 14:47:20 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/', {"merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":5}}],"note":"Medical Invoice 16 Jul, 2013 PST","payment_term":{"term_type":"NET_45"},"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"tax_inclusive":false,"total_amount":{"currency":"USD","value":"500.00"}})
  .reply(201, {"id":"INV2-WNVY-RKWC-46V4-2KJV","number":"2328","status":"DRAFT","merchant_info":{"email":"PPX.DevNet-facilitator@gmail.com","first_name":"Dennis","last_name":"Doctor","business_name":"Medical Professionals, LLC","phone":{"country_code":"001","national_number":"5032141716"},"address":{"line1":"1234 Main St.","city":"Portland","state":"OR","postal_code":"97217","country_code":"US"}},"billing_info":[{"email":"example@example.com"}],"shipping_info":{"first_name":"Sally","last_name":"Patient","business_name":"Not applicable","phone":{"country_code":"001","national_number":"5039871234"},"address":{"line1":"1234 Broad St.","city":"Portland","state":"OR","postal_code":"97216","country_code":"US"}},"items":[{"name":"Sutures","quantity":100,"unit_price":{"currency":"USD","value":"5.00"}}],"invoice_date":"2014-09-02 PDT","payment_term":{"term_type":"NET_45","due_date":"2014-10-17 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":false,"note":"Medical Invoice 16 Jul, 2013 PST","total_amount":{"currency":"USD","value":"500.00"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=284',
  'paypal-debug-id': '122e35a165eb4',
  date: 'Tue, 02 Sep 2014 14:47:20 GMT',
  location: 'https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV',
  'content-type': 'application/json',
  'content-length': '1045' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/send', {})
  .reply(202, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=34406',
  'paypal-debug-id': 'ba3faecb65edc',
  date: 'Tue, 02 Sep 2014 14:47:21 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/record-payment', {"method":"CASH","date":"2014-07-06 03:30:00 PST","note":"Cash received."})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=252',
  'paypal-debug-id': 'c0bba21c65a8e',
  date: 'Tue, 02 Sep 2014 14:47:22 GMT' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/record-refund', {"date":"2014-07-06 03:30:00 PST","note":"Refund provided by cash."})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=284',
  'paypal-debug-id': 'a939029c657a4',
  date: 'Tue, 02 Sep 2014 14:47:22 GMT' });

nock('https://api.sandbox.paypal.com')
  .delete('/v1/invoicing/invoices/INV2-WNVY-RKWC-46V4-2KJV/refund-records/1', {})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2732',
  'paypal-debug-id': '4a477616ebc5b',
  date: 'Sun, 10 Aug 2014 18:11:33 GMT' });

