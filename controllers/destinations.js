

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

module.exports = {
	index : indexDestination
}