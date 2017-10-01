angular.module('DashboardService', ['ngResource'])
	.factory('dashboardResource', function ($resource, $http) {

		var _getAlldashboard = function () {
			return $http({
				url: "http://127.0.0.1:9999/dashboards",
				method: "GET"
			});
		};

		return {
			getAlldashboard: _getAlldashboard
		};
	});