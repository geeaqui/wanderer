angular
	.module('wanderers',['ui.router','firebase','ngResource'])
	.config(MainRouter)
	.constant('API', '/api')
	.run(AuthCatcher)


function AuthCatcher($rootScope, $state){
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
    if(error === 'AUTH_REQUIRED') $state.go('authrequired')
  })
}

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
		.state('login',{
			url:'/login',
			templateUrl:'/states/login.html'
		})
		.state('signup',{
			url:'/signup',
			templateUrl:'/states/signup.html'
		})
		.state('authrequired',{
			url:'/authrequired',
			templateUrl:'/states/authRequired.html'
		})

	$urlRouterProvider.otherwise('/');
}