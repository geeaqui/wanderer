angular
	.module('wanderers',['ui.router'])
	.config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'/states/home.html'
		})
		.state('bucket',{
			url:'/wanderers',
			templateUrl:'/states/bucket.html'
		})

	$urlRouterProvider.otherwise('/');
}