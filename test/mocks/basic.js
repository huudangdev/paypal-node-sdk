var nock = require('nock');

nock('https://tlscheck.chargify.com:443')
  .get('/')
  .reply(200, "ConnectionOK\n", { 'content-type': 'text/plain; charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:00:12 GMT',
  'x-content-type-options': 'nosniff',
  'content-length': '13',
  connection: 'Close' });