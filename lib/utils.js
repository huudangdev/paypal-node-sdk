/* Copyright 2015 PayPal */
"use strict";

var getDefaultEndpoint = exports.getDefaultEndpoint = function getDefaultEndpoint(mode) {
    return (typeof mode === "string" && mode === "live") ? "paypal.com" : "sandbox.paypal.com";
};

var getDefaultApiEndpoint = exports.getDefaultApiEndpoint = function getDefaultApiEndpoint(mode) {
    return 'api-s.' + getDefaultEndpoint(mode);
};

/**
 * Merges two Objects recursively, setting property of obj1 to those of obj2
 * and creating property as necessary
 * @param  {Object} obj1 
 * @param  {Object} obj2 
 * @return {Object}      
 */
var merge = exports.merge = function merge(obj1, obj2) {
    for (var p in obj2) {
        try {
            // Property in destination object set; update its value.
            if (obj2[p].constructor === Object) {
                obj1[p] = merge(obj1[p], obj2[p]);

            } else {
                obj1[p] = obj2[p];
            }
        } catch (e) {
            // Property in destination object not set; create it and set its value.
            obj1[p] = obj2[p];
        }
    }
    return obj1;
};

/**
 * Checks if access token for client id has expired
 * @param  {Object} token_hash  object returned from paypal access token request
 *                              with expires_in set and sdk sets the created_at
 * @return {Boolean}            true if token expired else false
 */
var checkExpiredToken = exports.checkExpiredToken = function checkExpiredToken(token_hash) {
    var delta = (new Date().getTime() / 1000) - token_hash.created_at;
    return (delta < token_hash.expires_in) ? false : true;
};
