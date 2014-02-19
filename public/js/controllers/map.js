'use strict';

var myApp = angular.module('MapPlotter', ['jsonService', 'google-maps']);

myApp.controller('MapCtrl', ['$scope', function ($scope) {

			$scope.text = 'Hello, Angular fanatic.';
		}
	]);

myApp.controller('PlotsCtrl', function ($scope, JsonService) {
	$scope.markerList = [];
	JsonService.get(function (data) {
		$scope.locations = data.locations.splice(0, 10000);
		angular.forEach($scope.locations, function (value) {
			var temp = {
				latitude : [value.latitude.toString().slice(0, 2), '.', value.latitude.toString().slice(2)].join(''),
				longitude : [value.longitude.toString().slice(0, 3), '.', value.longitude.toString().slice(3)].join(''),
				showWindow : true,
			};
			this.push(temp);
		}, $scope.markerList);
	});

	$scope.mapPoint = function (x, y) {
		console.log(x + ', ' + y);
	};

	$scope.map = {
		center : {
			latitude : 29,
			longitude : -82
		},
		markers : $scope.markerList,
		zoom : 8
	};
});
