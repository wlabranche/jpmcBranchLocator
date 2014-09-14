'use strict';

// this file does a lot of the heavy lifting
// requires all the needed files for browserify to bundle together
// get dependnencies
var angular = require( 'angular' );
var uiRouter = require( 'angular-ui-router');

// get other angular modules
// project specific
require( './branch/models/branch.model.js' );
require( './map/models/map.model.js' );

// kick off main app
var app = angular.module( 'app', [
  'ui.router',
  'app.map',
  'app.branch'
]);

// get map logic
var mapConfig = require( './map/map.js' );
var mapCtrl = require( './map/controllers/map.controller.js' );

// get branch logic
var branchConfig = require( './branch/branch.js' );
var branchCtrl = require( './branch/controllers/branch.controller.js' );

// get directives
var mainMap = require( './shared/directives/map.directive.js' );
var phone = require( './shared/directives/phone.directive.js' );

// set config
app.config( mapConfig );
app.config( branchConfig );
app.config( function ( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
});

// set controllers
app.controller( 'MapCtrl', mapCtrl );
app.controller( 'BranchCtrl', branchCtrl );

// set directives
app.directive( 'mainMap', mainMap );
app.directive( 'branchPhone', phone );
