'use strict';

var myApp = angular.module('MapPlotter', ['jsonService']);

myApp.controller('MapCtrl', ['$scope', function ($scope) {

			$scope.text = 'Hello, Angular fanatic.';
		}
	]);

myApp.controller('PlotsCtrl', function ($scope, JsonService) {
	JsonService.get(function (data) {
		$scope.locations = data.locations;
	});
});