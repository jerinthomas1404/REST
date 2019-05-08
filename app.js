const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use('/images',express.static(path.join(__dirname,'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET ,POST ,PUT ,PATCH ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    // res.setHeader('',);
    next();
})
//app.use(bodyParser.urlencoded());//FORM requests

app.use('/feed', feedRoutes);

app.use((err,req,res)=>{
console.log(err);
const status = error.statusCode;
const message = error.message();
res.status(status).json({error_message:message});
});

mongoose.connect('mongodb://localhost:27017/messages', {
        useNewUrlParser: true
    })
    .then((result) => {
        app.listen(8080, function () {
            console.log('Connected');
        })
    }).catch(err => console.log(err));