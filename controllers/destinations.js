// var Destination = require('../models/destination');

// function indexDestination(req, res){
// 	Destination.find({} , function(err, destinations) {
//     if(err) res.status(500).json({error: err.message});
//     // data return so now we can render
//     res.status(200).json(destinations);
//   });
// }

var request = require('request');

function indexDestination(){
	var apiKey = "prtl6749387986743898559646983194";
	var country ="GB";
	var currency = "GBP";
	var destination = "AE";
	var options = {  
	    url: 'http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/'+country+'/'+currency+'/en-US£/uk/'+destination+'/anytime/anytime?apikey=' + apiKey,
	    method: 'GET',
	    headers: {
	        'Accept': 'application/json',
	        'Accept-Charset': 'utf-8',
	        'User-Agent': 'my-reddit-client'
	    }
	};

	request(options, function(err, res, body) {  
	    let json = JSON.parse(body);
	    console.log(json);
	});
}

module.exports = {
	index : indexDestination
}