// function to handle small map display
//  probably shouldn't be called 'main', that's misleading
module.exports = function () {
  return {
    restrict: 'E',
    template: require( '../views/main-map.jade' ),
    scope: {
      latitude: '=lat',
      longitude: '=lng'
    },
    link: function ( scope ) {
      // generate basic map
      var mapOptions = {
        center: new google.maps.LatLng( scope.latitude, scope.longitude ),
        zoom: 13
      };

      var target = document.getElementById( 'map-canvas' );
      var map = new google.maps.Map( target, mapOptions );

      // place marker
      var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: scope.$parent.branch.name
      });
    }
  };
};
