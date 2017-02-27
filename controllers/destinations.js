var Destination = require('../models/destination');

function indexDestination(req, res){
	Destination.find({} , function(err, destinations) {
    if(err) res.status(500).json({error: err.message});
    // data return so now we can render
    res.status(200).json(destinations);
  });
}

module.exports = {
	index : indexDestination
}