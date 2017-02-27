var express = require('express');
var app = express();
var layouts = require('express-ejs-layouts');
var routes = require('./config/routes');

// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');

// use express layouts middleware too
app.use(layouts);

//router
app.use(routes);

//server port
app.listen(3000, function(){
	console.log('app is listening at port 3000');
});