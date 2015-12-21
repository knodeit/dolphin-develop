'use strict';

var ctrl = require('../controllers/test');

module.exports = function (WebServerConfigurationFactory) {
    var app = WebServerConfigurationFactory.getApp();
    app.get('/', ctrl.all);
};