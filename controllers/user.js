var Destination = require('../models/destination');
var User = require('../models/user');

function createUser(req, res) {
	User.create(req.body, function (err, user) {
		if (err) {
			console.log(err)
			return res.status(500).json(err)
		}
		res.json(user)
	})
}

function showUser(req, res){
	// User.findById(req.user._id).populate('destinations').exec(function(err, user){
	// 	//if(err) return res.status(500).send(err);
	// 	console.log(user.destinations);
	// 	res.json(user);
	// });
	var uid = req.params._id
	console.log(User.findById({uid: uid}).populate('destinations'));
}

module.exports = {
	create: createUser,
	show: showUser
}