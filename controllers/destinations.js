var Destination = require('../models/destination');
var User = require('../models/user');

function indexDestination(req, res){
	User.findById(req.user._id).populate('destinations').exec(function(err, user){
		if(err) return res.status(500).send(err);
	});

	res.render('destination/index',{
		title: "Destinations",
		destinations: user.destinations

	});
}

function showDestination(req, res){
	res.redirect('/');
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
	edit : editDestination,
	new : newDestination,
	create : createDestination,
	update : updateDestination,
	delete : deleteDestination
}