var ejs = require('ejs');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./config/routes');
var bodyParser = require('body-parser');
var http = require('http');
var request = require('request');


// connect to the database
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/destinations');

// body parser for form data
app.use(bodyParser.urlencoded({ extended: false }));

// body parser for json data
app.use(bodyParser.json());

//create a public folder to import local files
app.use(express.static(__dirname + '/public'));

// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');

app.use("/api", routes);

app.get('/', function(req, res){
	console.log(req.body);
  res.render('index.html.ejs')

});
 
//server port
app.listen(process.env.PORT || 3000, function(){
	console.log('app is listening at port 3000');
});












