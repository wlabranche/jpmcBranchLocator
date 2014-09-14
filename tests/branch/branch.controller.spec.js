require( '../../app/app.js' );
require( 'angular-mocks' );

describe('branchCtrl', function(){
  var controller, scope;

  // mock services
  beforeEach( angular.mock.module( 'app' ) );
  beforeEach( angular.mock.inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();
    controller = $controller( 'BranchCtrl', {
      $scope: scope
    });
  }));

  it( 'should have a branch property', function(){
    expect( scope.branch ).toBeDefined();
  });

  it( 'should have a dayOfWeek property', function(){
    expect( scope.days ).toBeDefined();
  });
  
  it( 'dayOfWeek array should contain each day of the week', function(){
    expect( scope.days ).toEqual( ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] );
  });
});
