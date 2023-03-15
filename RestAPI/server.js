const cors = require('cors');
var express = require('express')
app = express()
app.use(cors())

// For parsing application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

port = process.env.PORT || 5001

mongoose = require('mongoose')
mongoose.set('strictQuery', true);

User = require('./api/models/userListModel')

bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1/UserDb', function(error){
    if(error) throw error
    console.log('Successfully connected');
})





var routes = require('./api/routes/userListRoutes')
routes(app)

app.listen(port)
console.log('User List API started on : '+ port)