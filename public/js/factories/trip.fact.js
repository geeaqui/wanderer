angular
	.module('wanderes')
	.factory('Trip', tripFactory)

function tripFactory(API, $http){
	return {
    getAll: function () {
      return $http.get(API + '/trips')
    }
}