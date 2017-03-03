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
	destinations:{
		type: [mongoose.Schema.Types.ObjectId], 
		ref: "Destination"
	}
});

module.exports = mongoose.model('User' , UserSchema);



// User.findOne({ uid: rec.body.uid }, function  (argument) {
// 	// body...
// })
