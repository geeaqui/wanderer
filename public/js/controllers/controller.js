angular
	.module('wanderers')
	.controller('tripController', tripController)

function tripController(Trips, $stateParams, $state){
	var self = this;
	self.all = [];

	self.getTrips = function(){
		Trips.getAll()
			.then(function(response){
				console.log(response.data)
			})
	}
}