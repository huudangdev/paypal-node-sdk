var nock = require('nock');

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A0152brN-U1KzGFrKTZbbGacSM.8OxxU19g-GXyLHZ7HbUQ","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=243',
  'paypal-debug-id': '9f25cee200706',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=234&TopLevelTxnStartTime=149583a451a&Host=slcsbidensectoken501.slc.paypal.com&pid=27294',
  date: 'Tue, 28 Oct 2014 19:27:34 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/notifications/webhooks/', {"url":"https://www.yeowza.com/ppwebhook","event_types":[{"name":"PAYMENT.AUTHORIZATION.CREATED"},{"name":"PAYMENT.AUTHORIZATION.VOIDED"}]})
  .reply(201, {"id":"0LS3308554161733N","url":"https://www.yeowza.com/ppwebhook","event_types":[{"name":"PAYMENT.AUTHORIZATION.CREATED","description":"A payment authorization was created"},{"name":"PAYMENT.AUTHORIZATION.VOIDED","description":"A payment authorization was voided"}],"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/0LS3308554161733N","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/0LS3308554161733N","rel":"update","method":"PATCH"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/0LS3308554161733N","rel":"delete","method":"DELETE"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=239',
  'paypal-debug-id': 'd97851383821a',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks&CalThreadId=140&TopLevelTxnStartTime=149583a47c5&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 19:27:34 GMT',
  'content-type': 'application/json',
  'content-length': '628' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/notifications/webhooks/0LS3308554161733N')
  .reply(200, {"id":"0LS3308554161733N","url":"https://www.yeowza.com/ppwebhook","event_types":[{"name":"PAYMENT.AUTHORIZATION.CREATED","description":"A payment authorization was created"},{"name":"PAYMENT.AUTHORIZATION.VOIDED","description":"A payment authorization was voided"}],"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/0LS3308554161733N","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/0LS3308554161733N","rel":"update","method":"PATCH"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/0LS3308554161733N","rel":"delete","method":"DELETE"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=243',
  'paypal-debug-id': 'aae1080800b47',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks&CalThreadId=143&TopLevelTxnStartTime=149583a498f&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 19:27:34 GMT',
  'content-type': 'application/json',
  'content-length': '628' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015uqC4rIg8MZpazDNiVcrAxKYN.KJ4t1kTncprRT2b4Ds","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=183',
  'paypal-debug-id': '72a22b635143c',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=83013&TopLevelTxnStartTime=149584f7203&Host=slcsbidensectoken501.slc.paypal.com&pid=27294',
  date: 'Tue, 28 Oct 2014 19:50:42 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/notifications/webhooks/', {"url":"https://www.yeowza.com/ppwebhook","event_types":[{"name":"PAYMENT.AUTHORIZATION.CREATED"},{"name":"PAYMENT.AUTHORIZATION.VOIDED"}]})
  .reply(201, {"id":"6HY79521VR978045E","url":"https://www.yeowza.com/ppwebhook","event_types":[{"name":"PAYMENT.AUTHORIZATION.CREATED","description":"A payment authorization was created"},{"name":"PAYMENT.AUTHORIZATION.VOIDED","description":"A payment authorization was voided"}],"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/6HY79521VR978045E","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/6HY79521VR978045E","rel":"update","method":"PATCH"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks/6HY79521VR978045E","rel":"delete","method":"DELETE"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=250',
  'paypal-debug-id': '851fdb646bcf0',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks&CalThreadId=141&TopLevelTxnStartTime=149584f74b9&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 19:50:42 GMT',
  'content-type': 'application/json',
  'content-length': '629' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/notifications/webhooks/', {"url":"https://www.yeowza.com/ppwebhook","event_types":[{"name":"PAYMENT.AUTHORIZATION.CREATED"},{"name":"PAYMENT.AUTHORIZATION.VOIDED"}]})
  .reply(400, {"name":"WEBHOOK_URL_ALREADY_EXISTS","details":[],"message":"Webhook URL already exists"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=183',
  'paypal-debug-id': '41e159135139c',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks&CalThreadId=140&TopLevelTxnStartTime=149584f7687&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 19:50:42 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '89' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015Ow6FuAYefIalt6pC0k.cP7MA449AQ1-jw206Hzzhlcw","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=243',
  'paypal-debug-id': 'a9d4fe65809b6',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=77617&TopLevelTxnStartTime=14958b1d18f&Host=slcsbidensectoken501.slc.paypal.com&pid=27294',
  date: 'Tue, 28 Oct 2014 21:38:08 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/notifications/webhooks/6HY79521VR978045E/event-types')
  .reply(200, {"event_types":[{"name":"PAYMENT.AUTHORIZATION.CREATED","description":"A payment authorization was created"},{"name":"PAYMENT.AUTHORIZATION.VOIDED","description":"A payment authorization was voided"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=177',
  'paypal-debug-id': 'd1966336ac9fc',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks&CalThreadId=141&TopLevelTxnStartTime=14958b1d4b2&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 21:38:09 GMT',
  'content-type': 'application/json',
  'content-length': '201' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015v.18fDjY1hBZrLwKFpR1AJwfnILEAoozirbS-6GyDzE","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=268',
  'paypal-debug-id': '00bd4ca90a025',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=16569&TopLevelTxnStartTime=14958eada47&Host=slcsbidensectoken502.slc.paypal.com&pid=13667',
  date: 'Tue, 28 Oct 2014 22:40:27 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/notifications/webhooks-events/?page_size=10&start_time=2014-10-20T11%3A42%3A25Z&end_time=2014-10-21T16%3A47%3A29Z')
  .reply(200, {"events":[{"id":"WH-1S115631EN580315E-9KH94552VF7913711","create_time":"2014-10-20T12:04:32Z","resource_type":"authorization","event_type":"PAYMENT.AUTHORIZATION.CREATED","summary":"A successful payment authorization was created for 1.00 USD","resource":{"amount":{"total":"1.00","currency":"USD","details":{"subtotal":"1.00"}},"id":"76V79459UM225560P","parent_payment":"PAY-1KA56302VE598851HKRCPTUA","update_time":"2014-10-20T12:03:24Z","state":"authorized","payment_mode":"INSTANT_TRANSFER","create_time":"2014-10-20T12:02:24Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/76V79459UM225560P","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/76V79459UM225560P/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/76V79459UM225560P/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/76V79459UM225560P/reauthorize","rel":"reauthorize","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-1KA56302VE598851HKRCPTUA","rel":"parent_payment","method":"GET"}],"valid_until":"2014-11-18T12:02:24Z","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","protection_eligibility":"ELIGIBLE"},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-1S115631EN580315E-9KH94552VF7913711","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-1S115631EN580315E-9KH94552VF7913711/resend","rel":"resend","method":"POST"}]},{"id":"WH-9CX24309MH241002A-02146673H3282292X","create_time":"2014-10-20T11:42:25Z","resource_type":"authorization","event_type":"PAYMENT.AUTHORIZATION.CREATED","summary":"A successful payment authorization was created for 15.00 USD","resource":{"amount":{"total":"15.00","currency":"USD","details":{"subtotal":"15.00"}},"id":"1DK351744D8079127","parent_payment":"PAY-55179425P6892414NKRCPI7I","update_time":"2014-10-20T11:41:14Z","state":"authorized","payment_mode":"INSTANT_TRANSFER","create_time":"2014-10-20T11:39:41Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/1DK351744D8079127","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/1DK351744D8079127/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/1DK351744D8079127/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/1DK351744D8079127/reauthorize","rel":"reauthorize","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-55179425P6892414NKRCPI7I","rel":"parent_payment","method":"GET"}],"valid_until":"2014-11-18T11:39:41Z","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","protection_eligibility":"ELIGIBLE"},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-9CX24309MH241002A-02146673H3282292X","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-9CX24309MH241002A-02146673H3282292X/resend","rel":"resend","method":"POST"}]}],"count":2}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=171019',
  'paypal-debug-id': '62d8412a080e9',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks-events&CalThreadId=168&TopLevelTxnStartTime=14958eadd49&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 22:40:27 GMT',
  'content-type': 'application/json',
  'content-length': '3267' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015.mTPFGDv7XvcySlakgrfxCsMmo.5Iv05Rozx4VNuTXw","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=17426',
  'paypal-debug-id': '20e8c61764b53',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=136&TopLevelTxnStartTime=14958fc3767&Host=slcsbidensectoken502.slc.paypal.com&pid=13667',
  date: 'Tue, 28 Oct 2014 22:59:24 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/notifications/webhooks-events/?page_size=10&start_time=2013-10-20T11%3A42%3A25Z&end_time=2013-10-21T16%3A47%3A29Z')
  .reply(400, {"name":"VALIDATION_ERROR","details":[{"field":"start_time","issue":"Invalid data provided"}],"message":"Invalid data provided"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=186',
  'paypal-debug-id': '3b42d09371e01',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks-events&CalThreadId=140&TopLevelTxnStartTime=14958fc39c6&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 22:59:25 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '128' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015zZOS2SfCnTEIowousRJLpM2zQzag43iCQNVWpomJsTg","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=17426',
  'paypal-debug-id': '40d60e74a975e',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=16569&TopLevelTxnStartTime=1495910ea15&Host=slcsbidensectoken502.slc.paypal.com&pid=13667',
  date: 'Tue, 28 Oct 2014 23:22:01 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/notifications/webhooks-events/WH-1S115631EN580315E-9KH94552VF7913711/resend', {})
  .reply(202, {"id":"WH-1S115631EN580315E-9KH94552VF7913711","create_time":"2014-10-20T12:04:32Z","resource_type":"authorization","event_type":"PAYMENT.AUTHORIZATION.CREATED","summary":"A successful payment authorization was created for 1.00 USD","resource":{"amount":{"total":"1.00","currency":"USD","details":{"subtotal":"1.00"}},"id":"76V79459UM225560P","parent_payment":"PAY-1KA56302VE598851HKRCPTUA","update_time":"2014-10-20T12:03:24Z","state":"authorized","payment_mode":"INSTANT_TRANSFER","create_time":"2014-10-20T12:02:24Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/76V79459UM225560P","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/76V79459UM225560P/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/76V79459UM225560P/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/76V79459UM225560P/reauthorize","rel":"reauthorize","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-1KA56302VE598851HKRCPTUA","rel":"parent_payment","method":"GET"}],"valid_until":"2014-11-18T12:02:24Z","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","protection_eligibility":"ELIGIBLE"},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-1S115631EN580315E-9KH94552VF7913711","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-1S115631EN580315E-9KH94552VF7913711/resend","rel":"resend","method":"POST"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=17426',
  'paypal-debug-id': 'cc5ce393a9115',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks-events&CalThreadId=140&TopLevelTxnStartTime=1495910ec70&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 23:22:01 GMT',
  'content-type': 'application/json',
  'content-length': '1620' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/notifications/webhooks-events/abracadabra/resend', {})
  .reply(404, {"name":"INVALID_RESOURCE_ID","details":[],"message":"Resource id is invalid"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=243',
  'paypal-debug-id': 'f09c558e90a4e',
  server_info: 'webhooksplatformserv:v1.notifications.webhooks-events&CalThreadId=168&TopLevelTxnStartTime=1495910ef60&Host=slcsbwebhooksplatformserv3002.slc.paypal.com&pid=3865',
  'content-language': '*',
  date: 'Tue, 28 Oct 2014 23:22:01 GMT',
  'content-type': 'application/json',
  'content-length': '78' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/notifications/certs/CERT-360caa42-fca2a594-a5cafa77')
  .reply(200, "-----BEGIN CERTIFICATE-----\r\nMIIHqDCCBpCgAwIBAgIQCSVMkxB1Kw9SPZtpAr3lTDANBgkqhkiG9w0BAQsFADB1\r\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\r\nd3cuZGlnaWNlcnQuY29tMTQwMgYDVQQDEytEaWdpQ2VydCBTSEEyIEV4dGVuZGVk\r\nIFZhbGlkYXRpb24gU2VydmVyIENBMB4XDTE1MDMxODAwMDAwMFoXDTE3MDMyMjEy\r\nMDAwMFowggElMR0wGwYDVQQPDBRQcml2YXRlIE9yZ2FuaXphdGlvbjETMBEGCysG\r\nAQQBgjc8AgEDEwJVUzEZMBcGCysGAQQBgjc8AgECEwhEZWxhd2FyZTEQMA4GA1UE\r\nBRMHMzAxNDI2NzEWMBQGA1UECRMNMjIxMSBOIDFzdCBTdDEOMAwGA1UEERMFOTUx\r\nMzExCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMREwDwYDVQQHEwhT\r\nYW4gSm9zZTEVMBMGA1UEChMMUGF5UGFsLCBJbmMuMRgwFgYDVQQLEw9QYXJ0bmVy\r\nIFN1cHBvcnQxNDAyBgNVBAMTK21lc3NhZ2V2ZXJpZmljYXRpb25jZXJ0cy5zYW5k\r\nYm94LnBheXBhbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDI\r\nXgwJj1E+vPOLNA7e3nFsRpQq7G1CFcoCNeRgFIGRfd4itt2jBRPfHXf1eeXODQ6V\r\nwTMP6rVYrI3HBQu5SZRZKO3gALPiBWTcz5FhVovYDz/d/DtasA5L7l1xmRM+GGPE\r\ne/D3ETPeyym6GTAuIzR1ju1BuSQlVnIrcILDHrFZo0RyqFH1eNL3oYfgz+ZCv+WH\r\n65rhS60VowiLAb2lsARckJ2P8wKIps3YUxAqVG5SJ9H49ueBDI01wEzE/+59J8s9\r\nGThmbMTqP6x4MneAcGN1TPimGd9wZlbwwrCYDtCoqFDcxMVgvD83uPrIinFwTIOX\r\nw63QSv8/+ANuawBcNJDrAgMBAAGjggOAMIIDfDAfBgNVHSMEGDAWgBQ901Cl1qCt\r\n7vNKYApl0yHU+PjWDzAdBgNVHQ4EFgQUt5yLggZOjjfzULzZCgX2KZO3R/gwNgYD\r\nVR0RBC8wLYIrbWVzc2FnZXZlcmlmaWNhdGlvbmNlcnRzLnNhbmRib3gucGF5cGFs\r\nLmNvbTAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUF\r\nBwMCMHUGA1UdHwRuMGwwNKAyoDCGLmh0dHA6Ly9jcmwzLmRpZ2ljZXJ0LmNvbS9z\r\naGEyLWV2LXNlcnZlci1nMS5jcmwwNKAyoDCGLmh0dHA6Ly9jcmw0LmRpZ2ljZXJ0\r\nLmNvbS9zaGEyLWV2LXNlcnZlci1nMS5jcmwwQgYDVR0gBDswOTA3BglghkgBhv1s\r\nAgEwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly93d3cuZGlnaWNlcnQuY29tL0NQUzCB\r\niAYIKwYBBQUHAQEEfDB6MCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5kaWdpY2Vy\r\ndC5jb20wUgYIKwYBBQUHMAKGRmh0dHA6Ly9jYWNlcnRzLmRpZ2ljZXJ0LmNvbS9E\r\naWdpQ2VydFNIQTJFeHRlbmRlZFZhbGlkYXRpb25TZXJ2ZXJDQS5jcnQwDAYDVR0T\r\nAQH/BAIwADCCAX0GCisGAQQB1nkCBAIEggFtBIIBaQFnAHUApLkJkLQYWBSHuxOi\r\nzGdwCjw1mAT5G9+443fNDsgN3BAAAAFMLovtNgAABAMARjBEAiBTR7r3p76qUJzF\r\n23lsbD/cLsA0KlxoJRSIvIK0OIYWiQIgVQWja8tWBlpcoFP30Iym7IuczitSazpH\r\nfhKAVroTgXgAdgBo9pj4H2SCvjqM7rkoHUz8cVFdZ5PURNEKZ6y7T0/7xAAAAUwu\r\ni+z4AAAEAwBHMEUCIEP3VYyLQB7lOgFo4WstyOurmRe3xa0OVaeFL/bDohHOAiEA\r\n+xQrRVAfaeT4qBdBJzLyVLU4V9bh/qBMXJdjvYujhAcAdgBWFAaaL9fC7NP14b1E\r\nsj7HRna5vJkRXMDvlJhV1onQ3QAAAUwui+6EAAAEAwBHMEUCIQC/YUc5X6xyb3ho\r\no4VMSJqSoNg9KKkvLh9nUQCdwHi3/QIgNwcBc9ZZCR/aWXQ7hKH6d39kpkDX2Z43\r\nXPy/Kl5sKI4wDQYJKoZIhvcNAQELBQADggEBAHixEZNpb0M1MsvsfNI6lLKxrs9s\r\nJkcBcmxrFyhTC8KP+Qp+Z1fnMRQwpTLIMr1+uAMqCPAnIShGHeFNJpUFSMyW4o0l\r\n+pZGz/L/YJBs7XP3ChSGC17ZKeGSQFfMqMQXfY/L6+n/1HkAwqmewqUMEuUmWN3F\r\nkXJqVngIYGZtxXRyiv2azLOhrNP8BgNZK6d2gVxntQfGr4hnd8Juq8SJy/S4xpPY\r\nYPD8vW7/wSOdAe1/kU38QwDVBQ5PJePS2WFwz8YA/eKcyg9lfsianfw35SjehJbn\r\nwGwzUbjtibyJnv3eAeYDGxaI6vbuoE99pSmYGIwSBLJwZamJHjci6HL6wLg=\r\n-----END CERTIFICATE-----", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=350',
  'paypal-debug-id': '56243234dd3a5',
  pragma: '',
  'cache-control': 'public,max-age=86400',
  expires: 'Tue, 19 May 2015 16:27:41 GMT',
  date: 'Mon, 18 May 2015 16:27:41 GMT',
  'content-type': 'application/x-pem-file',
  'content-length': '2756' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A015HzkFvnySgStf6vaZ9cqs.f.Csm1WbKZ9sJUBJOXu5Vk","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { date: 'Tue, 23 Jun 2015 17:57:56 GMT',
  server: 'Apache',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=362',
  'paypal-debug-id': '116d2a5a8e26d',
  connection: 'close',
  'content-length': '432',
  'set-cookie': 
   [ 'X-PP-SILOVER=name%3DSANDBOX3.API.1%26silo_version%3D880%26app%3Dplatformapiserv%26TIME%3D614369621; domain=.paypal.com; path=/; Secure; HttpOnly',
     'X-PP-SILOVER=; Expires=Thu, 01 Jan 1970 00:00:01 GMT' ],
  vary: 'Authorization',
  'content-type': 'application/json' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/notifications/webhooks-events/WH-7285486103862532R-5WM67492J86746059')
  .reply(200, {"id":"WH-7285486103862532R-5WM67492J86746059","create_time":"2015-06-23T15:26:30Z","resource_type":"authorization","event_type":"PAYMENT.AUTHORIZATION.CREATED","summary":"A successful payment authorization was created for $ 6.0 USD","resource":{"amount":{"total":"6.00","currency":"USD","details":{"subtotal":"6.00"}},"id":"6F961703H62685926","parent_payment":"PAY-2XG59747K7884911VKWEXUKI","update_time":"2015-06-23T15:25:23Z","state":"authorized","payment_mode":"INSTANT_TRANSFER","create_time":"2015-06-23T15:24:25Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/reauthorize","rel":"reauthorize","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2XG59747K7884911VKWEXUKI","rel":"parent_payment","method":"GET"}],"valid_until":"2015-07-22T15:24:25Z","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","protection_eligibility":"ELIGIBLE"},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-7285486103862532R-5WM67492J86746059","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-7285486103862532R-5WM67492J86746059/resend","rel":"resend","method":"POST"}]}, { date: 'Tue, 23 Jun 2015 17:57:56 GMT',
  server: 'Apache',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=596',
  'paypal-debug-id': 'd935806689f53',
  'content-language': '*',
  connection: 'close',
  'content-length': '1621',
  'set-cookie': 
   [ 'X-PP-SILOVER=name%3DSANDBOX3.API.1%26silo_version%3D880%26app%3Dplatformapiserv%26TIME%3D614369621; domain=.paypal.com; path=/; Secure; HttpOnly',
     'X-PP-SILOVER=; Expires=Thu, 01 Jan 1970 00:00:01 GMT' ],
  vary: 'Authorization',
  'content-type': 'application/json' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/notifications/webhooks-events/H-0G2756385H040842W-5Y612302CV158622M')
  .reply(404, {"name":"INVALID_RESOURCE_ID","details":[],"message":"Resource id is invalid"}, { date: 'Tue, 23 Jun 2015 17:57:57 GMT',
  server: 'Apache',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=210',
  'paypal-debug-id': 'a42aabb889ca2',
  'content-language': '*',
  connection: 'close',
  'content-length': '78',
  'set-cookie': 
   [ 'X-PP-SILOVER=name%3DSANDBOX3.API.1%26silo_version%3D880%26app%3Dplatformapiserv%26TIME%3D631146837; domain=.paypal.com; path=/; Secure; HttpOnly',
     'X-PP-SILOVER=; Expires=Thu, 01 Jan 1970 00:00:01 GMT' ],
  vary: 'Authorization',
  'content-type': 'application/json' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/notifications/verify-webhook-signature')
  .reply(200, { "verification_status": "SUCCESS" }, { 'content-type': 'application/json' });

