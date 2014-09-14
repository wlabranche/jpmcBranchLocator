'use strict';

var angular = require( 'angular' );

angular.module( 'app.branch', [])
  .factory( 'Branch', function () {
    var currentBranch = {};

    // choose branch on store locally
    currentBranch.selectBranch = function( branch ) {
      this.currentBranch = branch;
      // store locally, will break on referesh otherwise
      window.localStorage.setItem( 'selectedBranch', JSON.stringify(branch));
    };
    // get branch, default to local
    currentBranch.getInfo = function( branch ) {
      return this.currentBranch ||
        JSON.parse( localStorage.getItem( 'selectedBranch' ) );
    };

    return currentBranch;
  });
