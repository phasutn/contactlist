'use strict'
module.exports = function(app){
    var userList = require('../controllers/userListController')

    app.route('/users')
        .get(userList.listAllUsers)
        .post(userList.createAUser)

    app.route('/users/:userId')
        .get(userList.readAUserID)
        .delete(userList.deleteAUser)
        .post(userList.updateAUser)

    app.route('/users/:username/:password')
        .get(userList.readAUser)

    app.route('/auser')
        .get(userList.matchAUser)
}
