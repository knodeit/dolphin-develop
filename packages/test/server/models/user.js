'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, default: ''},
    email: {type: String, default: ''}
});
mongoose.model('User', UserSchema);