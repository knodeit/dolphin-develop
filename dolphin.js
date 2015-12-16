'use strict';

var dolphin = require('dolphin-core');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dolphin.run().then(function () {
    console.log('Dolphin started as mode (' + process.env.NODE_ENV + ')');
});

