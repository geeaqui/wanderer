angular
	.module('wanderers')
	.controller('authenticationController', authenticationController)

function authenticationController(Auth, $state, User){
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
			User.create({
                uid: user.uid,
                first_name: self.firstName,
                last_name: self.lastName
            }, function(user, err) {
                self.err = err.err;
                resetCredentials();
            })
			resetCredentials();
			console.log(user);
		})
		.catch(function(error){
			self.error = error;
		});
	}

	self.signOut = function(){
		Auth.$signOut();
		$state.go('login');
	}

	Auth.$onAuthStateChanged(function(user){
		console.log(user);
		self.user = user;
	})

	function resetCredentials(){
		self.email = "";
		self.password = "";
	}
}