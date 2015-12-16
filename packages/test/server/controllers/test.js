/**
 * Created by Vadim on 12/9/15.
 */
'use strict';
var dolphin = require('dolphin-core');

exports.all = function (req, res) {
    dolphin.resolveObjects(function (Test) {
        var bundles = require('../../../../public/bundle.result.json');
        Test.render('index.html', {bundle: bundles}).then(function (html) {
            res.send(html);
        }).catch(function (err) {
            res.send(err);
        });
    });
    //res.send('Hello mad world');
};