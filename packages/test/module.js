/**
 * Created by Vadim on 12/3/15.
 */
'use strict';
var Module = require('dolphin-core').Module;
var Logger = require('dolphin-core').Logger;

var test = new Module('Test');
test.register(function () {
    test.hello = function () {
        return 'hello';
    };


    Logger.info('INFO!!!!!!!!!!!!!!!!!!!!!!!!');
    /*Logger.warn('warn');
    Logger.debug('debug');
    Logger.error('error', {d:1});*/
    return test;
});