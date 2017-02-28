angular
	.module('wanderers')
	.factory('User', userFactory)

function userFactory(API, $resource) {
	
    return $resource(API + '/users/:id', { id: '@id' }, { 
        'getAll': { method: 'GET', isArray: false },
        'get': { method: 'GET' },
        'create': { method: 'POST'},
        'delete': { method: 'DELETE'},
        'update': { method: 'PATCH'}
    })	
}

