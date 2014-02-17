'use strict';

angular.module('jsonService', ['ngResource'])
.factory('JsonService', function ($resource) {
	return $resource('/json/LocationHistory.json');
});