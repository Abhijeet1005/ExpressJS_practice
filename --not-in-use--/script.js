// npm i ejs express 
const express = require('express');

const app = express();

app.set("view engine","ejs"); // sets the view engine to ejs
app.use(express.static('./public'));

app.get('/',function(req,res){
    res.render('index');      // here we use res.render() instead of res.send() coz we passing the whole template instead of hardcoded template
})
app.get('/about',function(req,res){
    res.render('about');      // here we use res.render() instead of res.send() coz we passing the whole template instead of hardcoded template
})
app.get('/profile/:username',function(req,res){
    res.send(`response from ${req.params.username} profile page`) //here we can access the params object passed into the req from the url
    
})

app.get('/error',function(req,res){
    res.render('error');
})
app.get('/test',function(req,res){
    res.render('test');
})




app.listen(3000);