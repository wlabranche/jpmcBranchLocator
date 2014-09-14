module.exports = function ( $stateProvider ) {
  // basic branch routing
  $stateProvider
    .state( 'root.branch', {
      url: '/branch',
      views: {
        'container@' : {
          template: require( './views/branch.jade' ),
          controller: 'BranchCtrl'
        }
      }
    });
};
