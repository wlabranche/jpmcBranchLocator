require( '../../app/branch/models/branch.model.js');
require( 'angular-mocks' );

describe( 'Branch Model', function(){
  var Branch;

  // mock for testing
  beforeEach( angular.mock.module( 'app.branch' ) );
  beforeEach( angular.mock.inject( function( _Branch_ ) {
    Branch = _Branch_;
  }));

  it('should have a selectBranch method', function(){
    expect( Branch.selectBranch ).toBeDefined();
  });
  it('Should have a getInfo method', function(){
    expect( Branch.getInfo ).toBeDefined();
  });

  describe( 'getBranch and selectBranch methods', function() {

    // add sample data
    var testPlace = {
      name: 'Not Real',
      address: '999 Fictional Lane',
      city: 'San Francisco',
      state: 'CA'
    };

    beforeEach( function() {
      Branch.selectBranch( testPlace );
    });

    afterEach(function() {
      localStorage.clear();
    });

    it( 'should return the correct information', function(){
      var branch = Branch.getInfo();
      expect( branch.name ).toEqual( testPlace.name );
      expect( branch.address ).toEqual( testPlace.address );
      expect( branch.city ).toEqual( testPlace.city );
      expect( branch.state ).toEqual( testPlace.state );
    });
    
    it( 'should return the correct branch information from local storage', function(){
      var local = JSON.parse( localStorage.getItem( 'selectedBranch' ));
      expect( local.name ).toEqual( testPlace.name );
      expect( local.address ).toEqual( testPlace.address );
      expect( local.city ).toEqual( testPlace.city );
      expect( local.state ).toEqual( testPlace.state );
    });
  });
});
