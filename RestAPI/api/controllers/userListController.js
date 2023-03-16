
'use strict'
var mongoose = require('mongoose')
var md5 = require('md5')

User = mongoose.model('Users')

exports.listAllUsers = function(req, res){
    const username = req.query.username;
    const password = req.query.password;

    var query = { sort: { username: 1 } }

    //if provide username and password with 
    //{link}/users?username={}&password={}
    //change the query else just list all
    if (username && password) {
        query = {
            username: username,
            password: md5(password)
        };
      }


    if(username || password){
        query = {
            username: null,
            password: null
        };
    }
    

    User.find(query, function(err, user){
        if(err) throw err
        //console.log(user)
        res.json(user)
    })
}

exports.createAUser = function(req, res){
    var newUser = new User(req.body)
    console.log(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.readAUserID = function(req, res){
    //console.log(req.params.userId)
    User.findById(req.params.userId, function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.readAUser = function(req, res){
    const username = req.query.username;
    const password = md5(req.query.password);

    User.findOne({ username: username, password: password }, function(err, user){
        if (err) throw err;
        if (!user) {
            return res.status(404).json({ message: 'User does not exist'});
          }

        res.json(user);
    });
}

exports.deleteAUser = function(req, res){
    //console.log(req.params.userId)
    User.findByIdAndRemove(req.params.userId, function(err, user){
        if(err) throw err
        const response = {
            message: "Delete user id: "+ req.params.userId +" successfully",
            id: user._id
        }
        res.json(response)
    })
}

exports.updateAUser = function(req, res){
    console.log(req.params.userId)
    var newUser = {}
    newUser = req.body
    console.log(newUser)
    User.findByIdAndUpdate(req.params.userId, newUser, {new: true}, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}