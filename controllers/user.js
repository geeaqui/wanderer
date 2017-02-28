var Destination = require('../models/destination');
var User = require('../models/user');

function indexDestination(req, res){
	Destination.find({} , function(err, destinations) {
    if(err) res.status(500).json({error: err.message});
    // data return so now we can render
    res.status(200).json(destinations);
  });
}
function createUser (req, res) {
	console.log(req.body)
	User.create(req.body, function (err, user) {
		if (err) {
			console.log(err)
			return res.status(500).json(err)
		}
		res.json(user)
	})
}




function showDestination(req, res){
}

function updateDestination(req, res){
	// res.redirect('/');
}

function deleteDestination(req, res){
	// res.redirect('/');
}


module.exports = {
	create: createUser,
	index : indexDestination,
	show : showDestination,
	update : updateDestination,
	delete : deleteDestination
}