angular
	.module('wanderers')
	.controller('tripController', tripController)

function tripController(Trips, $stateParams, $state){
	var self = this;
	self.all = [];

	self.getTrips = function(){
		Trips.getAll(self.searchTerm)
			.then(function(response){
				console.log(response.data)
			})
	}
}