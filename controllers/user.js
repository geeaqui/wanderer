var Destination = require('../models/destination');
var User = require('../models/user');

function indexDestination(req, res){
	User.find({} , function(err, destinations) {
    if(err) res.status(500).json({error: err.message});
    // data return so now we can render
    res.status(200).json(destinations);
  });
}

function showDestination(req, res){
}

function updateDestination(req, res){
	res.redirect('/');
}

function deleteDestination(req, res){
	res.redirect('/');
}


module.exports = {
	index : indexDestination,
	show : showDestination,
	update : updateDestination,
	delete : deleteDestination
}