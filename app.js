const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const app = express();
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET ,POST ,PUT ,PATCH ,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-type,Authorization');
    // res.setHeader('',);
    next(); 
})
//app.use(bodyParser.urlencoded());//FORM requests

app.use('/feed',feedRoutes);

app.listen(8080,function (){
    console.log('Connected');
});
