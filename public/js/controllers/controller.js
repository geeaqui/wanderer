angular
	.module('wanderers')
	.controller('tripController', tripController)

function tripController(Trips, $stateParams, $state){
	var self = this;
	self.tripQuery = [];
	self.quotes = [];
	self.carrier = [];

	self.getTrips = function(){
		Trips.getAll(self.searchTerm)
			.then(function(response){
				//console.log(response.data)
				self.tripQuery = response.data;
				console.log(self.tripQuery);
				self.quotes = self.tripQuery.Quotes;
				self.quotesFound = self.quotes.length;
				for(var i=0;i<self.quotes.length; i++){
					self.carrier.push(self.quotes[i].InboundLeg);
				}
				console.log(self.quotes);
				console.log(self.carrier[0].CarrierIds);

			})
	}
} 