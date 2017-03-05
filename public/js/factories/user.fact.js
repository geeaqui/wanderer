angular
	.module('wanderers')
	.factory('User', userFactory)

function userFactory(API, $resource) {
	
    return $resource(API + '/users/:id', { id: '@id' }, { 
        'create': { method: 'POST'},
        'get' : { method: 'GET'}
    })	
}

