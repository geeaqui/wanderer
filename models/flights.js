var mongoose = require('mongoose');

var FlightsSchema = mongoose.Schema({
	outboundOrigin:{
		type: String
	},
	outboundDestination:{
		type: String
	},
	outboundDepartureDate:{
		type: Date
	},
	inboundOrigin:{
		type:String
	},
	inboundDestination:{
		type:String
	},
	inboundDepartureDate:{
		type:Date
	},
	price:{
		type: Number
	}
});

module.exports = mongoose.model('Flights' , FlightsSchema);