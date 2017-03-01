angular
	.module('wanderers')
	.controller('tripController', tripController)

function tripController(Trips, $stateParams, $state){
	var self = this;
	self.tripQuery = [];
	self.quotes = [];

	self.getTrips = function(){
		Trips.getAll(self.searchTerm)
			.then(function(response){
				//console.log(response.data)
				self.tripQuery = response.data;
				console.log(self.tripQuery);
				self.quotes = self.tripQuery.Quotes;
				console.log(self.quotes[0].MinPrice);
				self.quotesFound = self.quotes.length;
			})
	}
}