var mongoose = require('mongoose');

var DestinationSchema = mongoose.Schema({
	destination{
		type: String,
		required: true,
		unique: true
	},
	date{
		type:Date,
		required:true,
	}
});
