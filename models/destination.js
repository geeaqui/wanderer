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

// module.exports =[
// 	  {
//     id: 0,
//     destination: "France",
//     cost: 299.99,
//     date:06/06/2017
//   },
//   {
//   	id: 1,
//     destination: "Germany",
//     cost: 349.99,
//     date:06/06/2017
//   },
//   {
//   	id: 2,
//     destination: "Iceland",
//     cost: 499,
//     date:06/06/2017
//   },
//   {
//   	id: 3,
//     destination: "Greece",
//     cost: 399.99,
//     date:06/06/2017
//   }
// ]
