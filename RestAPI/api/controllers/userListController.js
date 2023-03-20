
'use strict'
var mongoose = require('mongoose')
var md5 = require('md5')
var jwt = require('jsonwebtoken')


User = mongoose.model('Users')

exports.listAllUsers = function(req, res){
    const username = req.query.username;

    var query = { sort: { username: 1 } }

    //for finding with just username
    //used for registration
    if(username){
        query = {username: username}
    }

    User.find(query, function(err, user){
        if(err) throw err
        //console.log(user)
        res.json(user)
    })
}

exports.matchAUser = async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    try{
        //Empty username or password
        if(!username || !password){
            return res.status(401).json({ 
                message: 'Invalid username or password', errorType: 'LoginEmpty'
            });
        }

        //Find user with matching username first
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({ 
                message: 'Invalid username or password', errorType: 'LoginFail' 
            });
        }
        //Then Match the password
        let match = null; 
        if (md5(password) == user.password) match = true;
        else match = false;

        if(!match){
            return res.status(401).json({ 
                message: 'Invalid username or password', errorType: 'LoginFail'
            });
        }
        // Generate a JWT token with the user's ID and send it in the response
        const token = jwt.sign({ userId: user._id }, process.env.secretKey);
        return res.json({ token, success: true });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Unexpected Error', success: false });
    }
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