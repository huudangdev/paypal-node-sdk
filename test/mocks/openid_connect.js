var nock = require('nock');

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/identity/openidconnect/tokenservice', "client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=Invalid%20code&grant_type=authorization_code")
  .reply(400, "{\"error_description\":\"client id or secret is null\",\"error\":\"invalid_client\"}", { date: 'Wed, 23 Apr 2014 14:38:21 GMT',
  server: 'Apache-Coyote/1.1',
  'cache-control': 'no-store',
  pragma: 'no-cache',
  'content-type': 'application/json',
  'content-length': '76',
  'set-cookie': [ 'Apache=10.72.128.11.1398263901199054; path=/; expires=Fri, 15-Apr-44 14:38:21 GMT' ],
  vary: 'Accept-Encoding',
  connection: 'close' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/identity/openidconnect/tokenservice', "client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=Invalid%20code&grant_type=authorization_code")
  .reply(400, "{\"error_description\":\"client id or secret is null\",\"error\":\"invalid_client\"}", { date: 'Wed, 23 Apr 2014 14:38:21 GMT',
  server: 'Apache-Coyote/1.1',
  'cache-control': 'no-store',
  pragma: 'no-cache',
  'content-type': 'application/json',
  'content-length': '76',
  'set-cookie': [ 'Apache=10.72.128.11.1398263901644012; path=/; expires=Fri, 15-Apr-44 14:38:21 GMT' ],
  vary: 'Accept-Encoding',
  connection: 'close' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/identity/openidconnect/tokenservice', "client_id=CLIENT_ID&client_secret=CLIENT_SECRET&refresh_token=Invalid%20refresh_token&grant_type=refresh_token")
  .reply(400, "{\"error_description\":\"client id or secret is null\",\"error\":\"invalid_client\"}", { date: 'Wed, 23 Apr 2014 14:38:21 GMT',
  server: 'Apache-Coyote/1.1',
  'cache-control': 'no-store',
  pragma: 'no-cache',
  'content-type': 'application/json',
  'content-length': '76',
  'set-cookie': [ 'Apache=10.72.128.11.1398263902047383; path=/; expires=Fri, 15-Apr-44 14:38:22 GMT' ],
  vary: 'Accept-Encoding',
  connection: 'close' });


nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/identity/openidconnect/tokenservice', "client_id=CLIENT_ID&client_secret=CLIENT_SECRET&refresh_token=Invalid%20refresh_token&grant_type=refresh_token")
  .reply(400, "{\"error_description\":\"client id or secret is null\",\"error\":\"invalid_client\"}", { date: 'Wed, 23 Apr 2014 14:38:22 GMT',
  server: 'Apache-Coyote/1.1',
  'cache-control': 'no-store',
  pragma: 'no-cache',
  'content-type': 'application/json',
  'content-length': '76',
  'set-cookie': [ 'Apache=10.72.128.11.1398263902455816; path=/; expires=Fri, 15-Apr-44 14:38:22 GMT' ],
  vary: 'Accept-Encoding',
  connection: 'close' });


nock('https://api.sandbox.paypal.com')
  .post('/v1/identity/openidconnect/userinfo', "schema=openid&access_token=Invalid%20access_token")
  .reply(401, "", { date: 'Tue, 11 Aug 2015 16:33:54 GMT',
  server: 'Apache',
  'paypal-debug-id': 'dfaf12d0c5dff',
  'www-authenticate': 'Bearer error_description="Invalid Access Token",correlation_id="dfaf12d0c5dff",error="invalid_token",information_link="https://developer.paypal.com/docs/api/#errors",realm="UserInfoService"',
  'set-cookie': 
   [ 'Apache=10.72.128.11.1439310834659319; path=/; expires=Thu, 03-Aug-45 16:33:54 GMT',
     'X-PP-SILOVER=name%3DSANDBOX3.API.1%26silo_version%3D880%26app%3Didentityspartaweb_api%26TIME%3D4062431829; domain=.paypal.com; path=/; Secure; HttpOnly',
     'X-PP-SILOVER=; Expires=Thu, 01 Jan 1970 00:00:01 GMT' ],
  vary: 'Accept-Encoding',
  connection: 'close',
  'content-length': '0',
  'content-type': 'text/html; charset=ISO-8859-1' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/identity/openidconnect/userinfo', "schema=openid&access_token=Invalid%20access_token")
  .reply(401, "", { date: 'Tue, 11 Aug 2015 16:35:43 GMT',
  server: 'Apache',
  'paypal-debug-id': 'e90ab329e228f',
  'www-authenticate': 'Bearer error_description="Invalid Access Token",correlation_id="e90ab329e228f",error="invalid_token",information_link="https://developer.paypal.com/docs/api/#errors",realm="UserInfoService"',
  'set-cookie': 
   [ 'Apache=10.72.128.11.1439310943451341; path=/; expires=Thu, 03-Aug-45 16:35:43 GMT',
     'X-PP-SILOVER=name%3DSANDBOX3.API.1%26silo_version%3D880%26app%3Didentityspartaweb_api%26TIME%3D1596246613; domain=.paypal.com; path=/; Secure; HttpOnly',
     'X-PP-SILOVER=; Expires=Thu, 01 Jan 1970 00:00:01 GMT' ],
  vary: 'Accept-Encoding',
  connection: 'close',
  'content-length': '0',
  'content-type': 'text/html; charset=ISO-8859-1' });
