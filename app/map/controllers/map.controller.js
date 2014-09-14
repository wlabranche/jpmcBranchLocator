// this file is a bit big for my liking, but it gets the job done
// it's the map controller function, used on app.js
module.exports = function ( $scope, $state, Map, Branch ) {

  // get user location
  var userLocation = Map.geoLocation.coords;
  $scope.userLat = userLocation.latitude;
  $scope.userLng = userLocation.longitude;

  // attach properties to nearby branches
  var nearby = function( nearbyBranches ) {
    $scope.chaseLocations = nearbyBranches;
    // charcode of 'A'
    // allows for easy incrementing
    var current = 65;

    $scope.chaseLocations.forEach( function( branch ) {
      var letter = String.fromCharCode( current++ );
      var marker = makeMarker( branch, letter );

      branchClick( marker );
    });
  };

  // make a new branch marker
  var makeMarker = function( branch, letter ) {

    return new google.maps.Marker({
      position: new google.maps.LatLng(branch.lat, branch.lng),
      icon: 'assets/google_map_markers/blue_Marker' + letter + '.png',
      map: map,
      title: branch.name,
      info: branch
    });
  };

  // make branches clickable
  var branchClick = function( branchMarker ) {
    google.maps.event.addListener(branchMarker, 'click', function() {
      // this line helps avoid reloading problems
      Branch.selectBranch( this.info );
      $state.go( 'root.branch' );
    });
  };

  // get and set nearby branches to scope
  Map.locations( $scope.userLat, $scope.userLng )
    .then( function( results ) {
      nearby( results.data.locations );
    });

  // render map of user location
  var mapOptions = {
    center: new google.maps.LatLng( $scope.userLat, $scope.userLng ),
    zoom: 13
  };
  var target = document.getElementById('map-canvas');
  var map = new google.maps.Map( target, mapOptions );

  // mark user location
  var marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
    title: 'Current Location'
  });
};
