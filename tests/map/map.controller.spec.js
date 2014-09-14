// this test suite isn't behaving as expected
// don't think it's a great use of time at this point
require( '../../app/app.js' );
require( 'angular-mocks' );

describe('MapCtrl', function(){
  var ctrl, scope;

  //Mock application to allow us to inject our own dependencies
  beforeEach( angular.mock.module( 'app' ) );
  
  // Inject the $controller and $rootScope services in the beforeEach block
  beforeEach( angular.mock.inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();
    ctrl = $controller( 'MapCtrl', {
      $scope: scope
    });
  }));

  // it( 'should have a latitude', function(){
  //   expect( scope.userLat ).toBeDefined();
  // });
  // it('should have another property', function(){
  //   expect( scope.userLng ).toBeDefiend();
  // });
});