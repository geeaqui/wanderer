var mongoose = require('mongoose');

var DestinationSchema = mongoose.Schema({
	destination:{
		type: String,
		required: true,
		unique: true
	},
	cost:{
		type:Number,
		required:true
	},
	date:{
		type:Date,
		required:true,
	}
});

module.exports = mongoose.model('Destination' , DestinationSchema);

