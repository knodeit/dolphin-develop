/**
 * Created by Vadim on 12/9/15.
 */

'use strict';

module.exports = function (WebServerConfigurationFactory) {
    var app = WebServerConfigurationFactory.getApp();
    app.use(function (req, res, next) {
        console.log('before');
        next();
    });
};