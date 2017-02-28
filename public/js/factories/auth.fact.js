angular
	.module('myApp')
	.factory('Auth', AuthFactory)
	.run(function(){
  // Initialize Firebase
	var config = {
	    apiKey: "AIzaSyCQveMZhNtIgeI1vVMOkoet9RSRLa3VDTw",
	    authDomain: "wanderers-e87e4.firebaseapp.com",
	    databaseURL: "https://wanderers-e87e4.firebaseio.com",
	    storageBucket: "wanderers-e87e4.appspot.com",
	    messagingSenderId: "284697299900"
	};
	firebase.initializeApp(config);

function AuthFactory($firebaseAuth){
	return $firebaseAuth();
}