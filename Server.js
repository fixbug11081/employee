const express = require('express');
const  mongoose = require('mongoose');
const path = require('path');
const bodyParser=require('body-parser');
const cors= require('cors');


var mongoDatabase = 'mongodb+srv://ajeetgoswami:whoami11081@cluster0.sfncro7.mongodb.net/employeedetails'

const app =express();
mongoose.Promise = global.Promise;

mongoose.connect(mongoDatabase, {useNewUrlParser:true})
.then(()=>{console.log('Mongo database connected')},
err=>{console.log("Mongodb is not connected")});

const employeeRoutes = require('./Routes/Employee.route');

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use('/employees', employeeRoutes);
const server = app.listen(port,function (){
    console.log('Server listening on port :' +port)
});
