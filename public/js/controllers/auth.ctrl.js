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

	self.createUser = function(){
		Auth.$createUserWithEmailAndPassword(self.email, self.password)
		.then(function(user){
			resetCredentials();
			console.log(user);
		})
		.catch(function(error){
			self.error = error;
		});
	}


	function resetCredentials(){
		self.email = "";
		self.password = "";
	}
}