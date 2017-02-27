var express = require('express');
var app = express();
var routes = require('./config/routes');

//router
app.use(routes);

//server port
app.listen(3000, function(){
	console.log('app is listening at port 3000');
});