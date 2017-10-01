angular.module('SensorService', ['ngResource'])
	.factory('sensorResource', function ($resource, $http) {

		var _getAllSensors = function () {
			return $http({
				url: "http://127.0.0.1:9999/sensors",
				method: "GET"
			});
		};

		return {
			getAllSensors: _getAllSensors
		};
	});