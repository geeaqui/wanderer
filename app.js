var ejs = require('ejs');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./config/routes');
var bodyParser = require('body-parser');
var http = require('http');
var request = require('request');


// connect to the database
mongoose.connect(process.env.MONGOLAB_URI ||'mongodb://localhost/destinations');

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
  res.render('index.html.ejs')

});
 
/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET

// var apiKey = "prtl6749387986743898559646983194";
// var country ="GB";
// var currency = "GBP";
// var destination = "AE";
// var optionsget = {
//     host : 'partners.api.skyscanner.net', // here only the domain name
//     // (no http/https !)
//     path : '/apiservices/browsequotes/v1.0/'+country+'/'+currency+'/en-US/uk/'+destination+'/anytime/anytime?apikey='+ apiKey, // the rest of the url with parameters if needed
//     method : 'GET' // do GET
// };

// // do the GET request
// var reqGet = http.request(optionsget, function(res) {
//     console.log("statusCode: ", res.statusCode);
//     // uncomment it for header details
// //  console.log("headers: ", res.headers);
 
//     res.on('data', function(d) {
//         console.info('GET result:\n');
//         process.stdout.write(d);
//         console.info('\n\nCall completed');
//     });
 
// });

// reqGet.end();
// reqGet.on('error', function(e) {
//     console.error(e);
// });



//server port
app.listen(process.env.PORT || 3000, function(){
	console.log('app is listening at port 3000');
});












