'use strict'
module.exports = function(app){
    var userList = require('../controllers/userListController')
    var contactList = require('../controllers/contactListController')

    app.route('/users')
        .get(userList.listAllUsers)
        .post(userList.createAUser)

    app.route('/users/:userId')
        .get(userList.readAUserID)
        .delete(userList.deleteAUser)
        .post(userList.updateAUser)

    app.route('/users/:username/:password')
        .get(userList.readAUser)

    app.route('/login')
        .post(userList.matchAUser)

    app.route('/loggedin')
        .get(userList.loggedin)

    app.route('/contacts')
        .get(contactList.listAllContacts)
        .post(contactList.createAContact)

    app.route('/contacts/:contactId')
        .get(contactList.readAContact)
        .delete(contactList.deleteAContact)
        .post(contactList.updateAContact)

    app.route('/addcontact')
        .post(contactList.createAContact)

    app.route('/updatecontact/:contactId')
        .post(contactList.updateAContact)

    app.route('/deletecontact/:contactId')
        .delete(contactList.deleteAContact)
}