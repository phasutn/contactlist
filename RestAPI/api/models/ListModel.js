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

var ContactSchema = new Schema({
    contactid: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
        match: /^\d+$/
    },
    email: {
        type: String
    },
    facebook: {
        type: String
    },
    imageUrl: {
        type: String
    },
})

UserSchema.pre('save', function(next) {
    this.password = md5(this.password);
    next();
});


module.exports = mongoose.model('Users', UserSchema)
module.exports = mongoose.model('Contacts', ContactSchema)