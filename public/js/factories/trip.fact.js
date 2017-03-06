angular
	.module('wanderers')
	.factory('Trips', tripFactory)

function tripFactory(API, $http){
	return {
    	getAll: function (searchTerm) {
      		return $http.get(API +'/destination/' + searchTerm )
    	},
    	 add: function (flight, id) {
       	return $http.post(API + '/destination/' + id, flight)
     	},
        show: function(id){
          return $http.get(API + '/users/' + id)
      },
        delete: function(id, uid){
          return $http.delete(API + '/users/' + uid + '/destination/' + id)
      }
	}
}
