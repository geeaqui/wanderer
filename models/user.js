var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	first_name : {
		type: String,
		required: true,
	},
	last_name : {
		type: String,
		required: true
	},
	uid:{
		type:String,
		required:true
	},
	destinations: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Flights"
	}]
});

module.exports = mongoose.model('User' , UserSchema);


