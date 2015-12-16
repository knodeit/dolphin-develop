/**
 * Created by Vadim on 12/8/15.
 */
'use strict';
var Module = require('dolphin-core-modules').Module;
var test = new Module('Test', __dirname);

test.configureFactories(function (MongooseConfigurationFactory, WebServerConfigurationFactory, HtmlRenderConfigurationFactory, AngularJsConfigurationFactory) {
    MongooseConfigurationFactory.addModule(test);
    WebServerConfigurationFactory.addModule(test);
    HtmlRenderConfigurationFactory.addModule(test);
    AngularJsConfigurationFactory.addModule('test', test);
});