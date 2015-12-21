'use strict';

//var Q = require('q');

//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

module.exports = function () {
    return {
        model: 'User',
        plugin: function (schema, options) {
            schema.add({
                test: {type: String, default: 'TeST!!!!!!!!!!!!!!!!!!!'}
            });
        }
    };
};