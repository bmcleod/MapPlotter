'use strict';

var myApp = angular.module('MapApp', []);
 
myApp.controller('MapCtrl', ['$scope', function($scope){
	var items = angular.fromJson('../json/LocationHistory.json');
	$scope.coordinates = items;
}]);