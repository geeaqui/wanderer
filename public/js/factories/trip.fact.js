angular
	.module('wanderers')
	.factory('Trips', tripFactory)

function tripFactory(API, $http){
	return {
    	getAll: function () {
      	return $http.get(API +'/destination')
    	}
	}
}