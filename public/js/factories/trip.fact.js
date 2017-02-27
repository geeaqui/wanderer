angular
	.module('wanderers')
	.factory('Trips', tripsFactory)

function tripsFactory(API, $http){
	return {
		getAll: function(){
			return $http.get(API + '/wanderers')
		}
	}
}