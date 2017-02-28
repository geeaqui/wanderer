angular
	.module('wanderers')
	.controller('authenticationController', authenticationController)

function authenticationController(Auth, $state){
	var self = this;

	self.signIn = function(){
		Auth.$signInWithEmailAndPassword(self.email, self.password)
			.then(function(){
				$state.go('home');
			})
			.catch(function(error){
				self.error = error;
			})
	}
}