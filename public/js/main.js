angular.module('hackathon', ['ngAnimate', 'ngRoute', 'ngResource', 'SensorService', 'DashboardService'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/menu', {
			templateUrl: 'partials/menu.html',
			controller: 'HackathonController'
		});

		$routeProvider.when('/place', {
			templateUrl: 'partials/place.html',
			controller: 'HackathonController'
		});

		$routeProvider.when('/searchPlaceSensors', {
			templateUrl: 'partials/searchPlaceSensors.html',
			controller: 'HackathonController'
		});

		$routeProvider.otherwise({redirectTo: '/searchPlaceSensors'});

	});