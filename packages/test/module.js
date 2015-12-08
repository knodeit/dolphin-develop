/**
 * Created by Vadim on 12/3/15.
 */
'use strict';
var Module = require('dolphin-core').Module;
var Logger = require('dolphin-core').Logger;

var test = new Module('Test');

test.hello = function () {
    return 'hello';
};

test.factory('Foo', function () {
    return {
        foo: 'bar'
    };
});

test.configureFactories(function (TestFooFactory) {
    console.log('PRE', TestFooFactory);
});

test.run(function (TestFooFactory) {
    console.log('POST', TestFooFactory);
});


Logger.info('Test!!!!!!!!!!!!!!!!!!!!!!!!');
/*Logger.warn('warn');
 Logger.debug('debug');
 Logger.error('error', {d:1});*/

