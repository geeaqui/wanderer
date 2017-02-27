var express = require('express');
var app = express();
var mongoose = require('mongoose');
var layouts = require('express-ejs-layouts');
var routes = require('./config/routes');

// connect to the database
mongoose.connect('mongodb://localhost/posts');

//create a public folder to import local files
app.use(express.static(__dirname + '/public'));

// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');

// use express layouts middleware too
app.use(layouts);

//router
app.use("/api", routes);

//server port
app.listen(3000, function(){
	console.log('app is listening at port 3000');
});