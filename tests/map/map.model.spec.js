require( '../../app/map/models/map.model.js' );
require( 'angular-mocks' );

describe( 'Map Model', function(){
  var Map;

  // pretest mock
  beforeEach( angular.mock.module( 'app.map' ) );
  beforeEach( angular.mock.inject( function( _Map_ ) {
    Map = _Map_;
  }));

  it( 'Should have a getLocations method', function(){
    expect( Map.locations ).toBeDefined();
  });
  it( 'Should have a getGeoLocation method', function(){
    expect( Map.getGeoLocation ).toBeDefined();
  });
  
});
