'use strict'
var mongoose = require('mongoose')
var md5 = require('md5')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: {
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    },
    createdDate:{
        type: Date,
        default :Date.now

    },
})

UserSchema.pre('save', function(next) {
    this.password = md5(this.password);
    next();
});


module.exports = mongoose.model('Users', UserSchema)