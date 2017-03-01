angular
	.module('wanderers')
	.factory('Trips', tripFactory)

function tripFactory(API, $http){
	return {
    	getAll: function (searchTerm) {
      		return $http.get(API +'/destination/' + searchTerm )
    	}
	}
}