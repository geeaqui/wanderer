var ejs = require('ejs');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./config/routes');

// connect to the database
mongoose.connect(process.env.MONGOLAB_URI ||'mongodb://localhost/destinations');

//create a public folder to import local files
app.use(express.static(__dirname + '/public'));

// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');


var routes = require('./config/routes');
app.use("/api", routes);

app.get('/', function(req, res){
  res.render('index.html.ejs')
});

//server port
app.listen(3000, function(){
	console.log('app is listening at port 3000');
});