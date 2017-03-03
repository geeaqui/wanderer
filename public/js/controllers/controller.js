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
	self.carrier = [];
	self.flightDetail;

	/************ Inbound Arrays ***********/
	self.inboundOrigin=[];
	self.inboundDepartureDate=[]

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

				//return the number of queries.
				self.quotesFound = self.quotes.length;

				console.log(self.tripQuery);
				/***************** InBound Data ****************/
				for(var i = 0; i<self.quotes.length;i++){
					for(var j= 0; j < self.places.length; j++){
						//Inbound Origin data
						if(self.quotes[i].InboundLeg.OriginId == self.places[j].PlaceId){
							//push origin destination into the array
							console.log("Destination " + self.places[j].Name)
							self.flightDetail= {Origin: self.places[j].Name};
							console.log("asdFLights:::: " + self.flightDetail.origin)
							self.inboundOrigin.push(self.flightDetail);

						}
						if(self.quotes[i].InboundLeg.DestinationId == self.places[j].PlaceId){
							//Departure Date inbound data
							
							console.log("Inbound Departure Date: " + self.quotes[i].InboundLeg.DepartureDate);
							for(var k=0; k< self.carriers.length; k++){

								if(self.quotes[i].InboundLeg.CarrierIds[0] == self.carriers[k].CarrierId){
									//Inbound Carrier/airline data
									console.log("Inbound Airline: " + self.carriers[k].Name);

								}
							}

							//Price inbound flight data
							console.log("Inbound Price: " + self.quotes[i].MinPrice);
							self.flightDetail.Price = self.quotes[i].MinPrice;
							//self.inboundDestination = self.places[j].Name;
							self.flightDetail.destination = self.places[j].Name;
							//self.inboundOrigin.push(self.flightDetail);

							//Destination inbound flight data
							console.log("Inbound Destination: " + self.inboundDestination);

							//push objects data into the array
							// self.inboundOrigin.push(self.flightDetail);
						}else{
							console.log("this does not match");
						}

						/************** Outbound Data **************/

						//Outbound Origin Data
						if(self.quotes[i].OutboundLeg.OriginId == self.places[j].PlaceId){
							self.outboundOrigin = self.places[j].Name;
							console.log('outbound Origin: ' + self.outboundOrigin);
						}
						//Outbound flight data
						if(self.quotes[i].OutboundLeg.DestinationId == self.places[j].PlaceId){
							//Outbound Deaparture Date
							console.log("Outbound Departure Date: " + self.quotes[i].OutboundLeg.DepartureDate);
							self.outBoundDestination = self.places[j].Name;
							//Outbound Flight Destination
							console.log("OutBound Destination: " + self.outBoundDestination);
							for(var k=0; k< self.carriers.length; k++){
								if(self.quotes[i].OutboundLeg.CarrierIds[0] == self.carriers[k].CarrierId){
									// Outbound Carrier/airline data
									console.log("Outbound Airline: " + self.carriers[k].Name);
								}
							}
						}

					}
				}
				console.log(self.inboundOrigin);
				
			})
	}

	
} 


























