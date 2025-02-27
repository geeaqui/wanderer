
var Flight = require('../models/flights');
var User = require('../models/user');

function indexDestination(req, res){
	console.log(req.params)
	var apiKey = "prtl6749387986743898559646983194";
	var request = require('request');
	var country ="GB";
	var currency = "GBP";
	// var destination = "AE";
	var destination = req.params.searchTerm
	var options = {  
	    url: 'http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/'+country+'/'+currency+'/en-US£/uk/'+destination+'/anytime/anytime?apikey=' + apiKey,
	    //url: 'https://medium.com/_/api/tags/sparta-global/stream?limit=25',
	    method: 'GET',
	    headers: {
	        'Accept': 'application/json',
	        'Accept-Charset': 'utf-8',
	        'User-Agent': 'my-reddit-client'
	    }
	};

	request(options, function(err, response, body) {  
		if (err) {
			conosle.log(err)
			return res.status(500).json(err)
		}

	    var json = JSON.parse(body);
	    res.json(json)
	});
}

function addFlights(req, res){
	var uid = req.params.id
	User.findOne({uid: uid}, function (err, user) {

		var flights = new Flight(req.body);
	  	flights.save(function(error) {
	    	if(error) return res.json({messsage: 'Could not add flights b/c:' + error});

	    	user.destinations.push(flights._id)
	    	user.save(function (err) {
	    		if(err) res.json({messsage: 'Could not add flights b/c:' + err});
	    		res.json({flights: flights});
	    	})
	  	});
	})
}

function deleteFlight(req, res){
	var uid = req.params.uid;
	var flightId = req.params.id;

  	User.findOne({uid:uid}, function(err, user){
  		if(err) res.json({message: 'Could not delete list b/c: '+ err});

  		user.destinations.filter(function(dest) {
  			return (this !== flightId);
  		})

  		user.save(function(err, user) {
  			if(err) res.json({message: 'Could not delete list b/c: '+ err});
  			Flight.findByIdAndRemove(flightId, function(err, flight) {
  				if(err) res.json({message: 'Could not delete list b/c: '+ err});
  				res.json({message: "Flight deleted!"});
  			})
  		})
  	})
}

function showFlight(req, res){
	var uid = req.params.uid;
	var flightId = req.params.id;

	User.findOne({uid:uid}, function(err, user){
		if(err) res.json({message: 'Could not delete list b/c: ' + err});

		console.log(user.destinations);
	})

}

module.exports = {
	index : indexDestination,
	add : addFlights,
	delete: deleteFlight,
	display: showFlight
}