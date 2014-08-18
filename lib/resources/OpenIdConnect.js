/* Copyright 2014 PayPal */
"use strict";
var configuration = require('../configure');
var client = require('../client');
var utils = require('../utils');
var querystring = require('querystring');

function openid_connect_request(path, data, config, cb) {

    var basicAuthString = 'Basic ' + new Buffer(data.client_id + ':' + data.client_secret).toString('base64');

    var http_options = {
        schema: config.openid_connect_schema || configuration.default_options.openid_connect_schema,
        host: utils.getDefaultApiEndpoint(config.mode) || config.openid_connect_host,
        port: config.openid_connect_port || configuration.default_options.openid_connect_port,
        headers: {
            'Authorization': basicAuthString,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    client.invoke('POST', path, querystring.stringify(data), http_options, cb);
}

function get_openid_client_id(config) {
    return config.openid_client_id || config.client_id ||
        configuration.default_options.openid_client_id || configuration.default_options.client_id;
}

function get_openid_client_secret(config) {
    return config.openid_client_secret || config.client_secret ||
        configuration.default_options.openid_client_secret || configuration.default_options.client_secret;
}

function get_openid_redirect_uri(config) {
    return config.openid_redirect_uri || configuration.default_options.openid_redirect_uri;
}

function authorize_url(data, config) {
    config = config || configuration.default_options;
    data   = data || {};

    //Use mode provided, live or sandbox to construct authorize_url, sandbox is default
    var url = 'https://www.' + utils.getDefaultEndpoint(config.mode) + '/webapps/auth/protocol/openidconnect/v1/authorize' || config.authorize_url;

    data = utils.merge({
        'client_id': get_openid_client_id(config),
        'scope': 'openid',
        'response_type': 'code',
        'redirect_uri': get_openid_redirect_uri(config)
    }, data);

    return url + '?' + querystring.stringify(data);
}

function logout_url(data, config) {
    config = config || configuration.default_options;
    data   = data || {};

    var url = 'https://www.' + utils.getDefaultEndpoint(config.mode) + '/webapps/auth/protocol/openidconnect/v1/endsession' || config.logout_url;

    if (typeof data === 'string') {
        data = { 'id_token': data };
    }

    data = utils.merge({
        'logout': 'true',
        'redirect_uri': get_openid_redirect_uri(config)
    }, data);

    return url + '?' + querystring.stringify(data);
}

function tokenInfoRequest(data, config, cb) {

    if (typeof config === 'function') {
        cb = config;
        config = configuration.default_options;
    } else if (!config) {
        config = configuration.default_options;
    }

    data = utils.merge({
        'client_id': get_openid_client_id(config),
        'client_secret': get_openid_client_secret(config)
    }, data);

    openid_connect_request('/v1/identity/openidconnect/tokenservice', data, config, cb);
}

function userInfoRequest(data, config, cb) {
    if (typeof config === 'function') {
        cb = config;
        config = configuration.default_options;
    } else if (!config) {
        config = configuration.default_options;
    }

    if (typeof data === 'string') {
        data = { 'access_token': data };
    }

    data = utils.merge({
        'schema': 'openid',
        'client_id': get_openid_client_id(config)
    }, data);

    openid_connect_request('/v1/identity/openidconnect/userinfo', data, config, cb);
}

function openIdConnect() {
    return {
        tokeninfo: {
            create: function (data, config, cb) {
                if (typeof data === 'string') {
                    data = { 'code': data };
                }
                data.grant_type = 'authorization_code';
                tokenInfoRequest(data, config, cb);
            },
            refresh: function (data, config, cb) {
                if (typeof data === 'string') {
                    data = { 'refresh_token': data };
                }
                data.grant_type = 'refresh_token';
                tokenInfoRequest(data, config, cb);
            }
        },
        authorize_url: authorize_url,
        logout_url: logout_url,
        userinfo: {
            get: userInfoRequest
        }
    };
}

module.exports = openIdConnect;