'use strict';

angular.module('videochatApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
