angular
	.module('wanderers')
	.controller('tripController', tripController)

function tripController(Trips, $stateParams, $state){
	var self = this;
	
	//Objects Array
	self.tripQuery = [];
	
	//Objects
	self.quotes = [];
	self.places = [];
	

	//
	self.carrier = [];

	self.getTrips = function(){
		Trips.getAll(self.searchTerm)
			.then(function(response){
				//console.log(response.data)
				self.tripQuery = response.data;
				console.log(self.tripQuery);
				self.quotes = self.tripQuery.Quotes;
				self.places = self.tripQuery.Places;
				self.carriers = self.tripQuery.Carriers;
				console.log(self.places);

				self.quotesFound = self.quotes.length;

				console.log(self.tripQuery);

				console.log(self.quotes[0].InboundLeg.DestinationId);
				console.log(self.places[7].PlaceId);

				for(var i = 0; i<self.quotes.length;i++){
					for(var j= 0; j < self.places.length; j++){
						if(self.quotes[i].InboundLeg.DestinationId == self.places[j].PlaceId){
							//inbound data
							console.log("Inbound Departure Date: " + self.quotes[i].InboundLeg.DepartureDate);
							for(var k=0; k< self.carriers.length; k++){

								if(self.quotes[i].InboundLeg.CarrierIds[0] == self.carriers[k].CarrierId){
									//Inbound data
									console.log("Inbound Airline: " + self.carriers[k].Name);
								}
							}
							//inbound flight data
							console.log("Inbound Price: " + self.quotes[i].MinPrice);
							self.destinationName = self.places[j].Name;
							//inbound flight data
							console.log("Inbound Destination: " + self.destinationName);
						}else{
							console.log("this does not match");
					}
					}
				}
			})
	}
} 


























