/* Copyright 2013 PayPal */
"use strict";

var http = require('http');
var https = require('https');
var querystring = require('querystring');

module.exports = function() {
    
    var deafult_options = null;
    
    function configure (options) {
        deafult_options = options; 
    }

    function generateToken(client_id, client_secret, cb) {

        var basicAuthString = 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64');

        var http_options = {
            host: deafult_options.host,
            port: deafult_options.port,
            headers: {
                'Authorization': basicAuthString,
                'Accept': 'application/json'
            }
        };
        var token = null;
        executeHttp('https', 'POST', '/v1/oauth2/token', 'response_type=token&grant_type=client_credentials', http_options, function(res, err) {
            if (err) {
                throw err;
            }

            if (res) {
                token = res.token_type + ' ' + res.access_token;
            }

            cb(token);
        });

    }

    function executeHttp(http_scheme, http_method, path, data, http_options, cb) {
        var client = (http_scheme != 'https') ? http : https;

        var request_data = (http_method != 'GET') ? data : querystring.stringify(data);

        //console.log("Data is " + request_data);

        if (http_options) {
            if (!http_options.headers) {
                http_options['headers'] = {};
            }
            http_options['path'] = path;
            http_options['method'] = http_method;
            http_options.headers['Content-Length'] = request_data.length;
        }

        var req = client.request(http_options);

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        req.on('response', function(res) {
            var response = '';
            var resText = '';
            res.setEncoding('utf8');
            res.on('data',

            function(chunk) {
                //console.log("chunk is " + chunk);
                response += chunk;
            });
            res.on('end',

            function() {
                console.log("response  status code " + res.statusCode);
                var err = null;
                try {
                    console.log("response  status inside " + response);
                    resText = response.toString();
                    response = JSON.parse(response);

                    response.httpStatusCode = res.statusCode;
                    if (res.statusCode < 200 || res.statusCode >= 300) {

                        err = new Error();
                        err.error = response;
                        err.httpStatusCode = res.statusCode;
                        response = null;
                    }
                } catch (e) {
                    err = new Error('Invalid JSON Response Received');
                    err.error = {name:'Invalid JSON Response Received, JSON Parse Error'};
                    err.httpStatusCode = res.statusCode;
                    response = null;
                }
                cb(response, err);
            });
        });

        req.write(request_data);
        req.end();
    }


    return {
        configure: function(options) {
            configure(options);
        },
        generateToken: function(client_id, client_secret,cb) {
            generateToken(client_id, client_secret,cb);
        },
        executeHttp: function(http_scheme, http_method, path, data, http_options, cb) {
            executeHttp(http_scheme, http_method, path, data, http_options, cb);
        },
        payment: {
            create: function(data, http_options, cb) {
                executeHttp('https', 'POST', '/v1/payments/payment/', (typeof data != 'string') ? JSON.stringify(data) : data, http_options, cb);
            },
            get: function(payment_id, http_options, cb) {
                executeHttp('https', 'GET', '/v1/payments/payment/' + payment_id, {}, http_options, cb);
            },
            list: function(data, http_options, cb) {
                executeHttp('https', 'GET', '/v1/payments/payment', data, http_options, cb);
            }
        },
        sale: {
            refund: function(sale_id,data, http_options, cb) {
                executeHttp('https', 'POST', '/v1/payments/sale/' + sale_id + '/refund', (typeof data != 'string') ? JSON.stringify(data) : data , http_options, cb);
            },
            get: function(sale_id, http_options, cb) {
                executeHttp('https', 'GET', '/v1/payments/sale/' + sale_id, {}, http_options, cb);
            }
        },
        refund: {
            get: function(refund_id, http_options, cb) {
                executeHttp('https', 'GET', '/v1/payments/refund/' + refund_id, {}, http_options, cb);
            }
        },
        credit_card: {
            create: function(data, http_options, cb) {
                executeHttp('https', 'POST', '/v1/vault/credit-card/', (typeof data != 'string') ? JSON.stringify(data) : data, http_options, cb);
            },
            get: function(credit_card_id, http_options, cb) {
                executeHttp('https', 'GET', '/v1/vault/credit-card/' + credit_card_id, {}, http_options, cb);
            }
        }
    }

}