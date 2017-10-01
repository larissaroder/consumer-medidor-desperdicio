angular.module('hackathon')
	.controller('HackathonController', function ($scope, sensorResource, dashboardResource, $routeParams) {

		$scope.sensors = [];
		sensorResource.getAllSensors().success(function (data) {
			$scope.sensors = data;
		}, function (erro) {
			console.log(erro);
		});

		$scope.dashboards = [];
		$scope.refresh = function () {
			dashboardResource.getAlldashboard().success(function (data) {
				$scope.dashboards = data;
				console.log(data);
			}, function (erro) {
				console.log(erro);
			});
		}

		$scope.refresh();
	});