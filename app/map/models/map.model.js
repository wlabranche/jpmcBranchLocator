'use strict';

// dependencies
var angular = require( 'angular' );

angular.module( 'app.map', [] )
  .factory( 'Map', function ( $http, $q ) {
    // make object
    var currentMap = {};
    
    // get nearby locations
    currentMap.locations = function( latitude, longitude ) {
      //return data from chase
      return $http({
        url: 'https://m.chase.com/PSRWeb/location/list.action',
        method: 'GET',
        params: {
          lat: latitude,
          lng: longitude
        }
      });
    };

    // use internal geolocation to set user location
    currentMap.getGeoLocation = function() {
      var promise = $q.defer();

      window.navigator.geolocation.getCurrentPosition( function( location ) {

        this.geoLocation = location;
        promise.resolve( location );

      }.bind( this ));

      return promise.promise;
    };

    // return object
    return currentMap;
  });
