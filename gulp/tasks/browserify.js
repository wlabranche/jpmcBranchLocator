'use strict';

var gulp = require( 'gulp' );

var browserify = require( 'browserify' );
var watchify = require( 'watchify' );
var source = require( 'vinyl-source-stream' );

gulp.task( 'browserify', function () {
  var bundler =
    browserify({
      entries: [ './index.js' ],
      extentions: [ '.js' ],
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    });

  var watchedBundle = global.isWatching ? watchify( bundler ) : bundler;

  watchedBundle.transform('jadeify');
  
  var bundle = function () {

    return bundler
             .bundle()
             .pipe( source( 'app.js' ))
             .pipe( gulp.dest( './public/' ))
  };

  if ( global.isWatching ) {
    watchedBundle.on( 'update', bundle );
  }

  return bundle();
});

