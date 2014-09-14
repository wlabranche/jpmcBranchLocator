// map config function, used in app.js
module.exports = function ( $stateProvider ) {
  // basic map routing
  $stateProvider
    .state( 'root',{
      abstract: true,
      views: {
        'header': {
          template: require( '../shared/views/header.jade' )
        }
      }
    })
    .state( 'root.map', {
      url: '/',
      views: {
        'container@': {
          template: require( './views/map.jade' ),
          controller: 'MapCtrl'
        }
      },
      resolve: {
        locationInit: function( Map ) {
          return Map.getGeoLocation();
        }
      }
    });
};