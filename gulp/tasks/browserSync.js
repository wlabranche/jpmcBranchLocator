'use strict';

var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' );

gulp.task( 'browserSync', ['build'], function() {
  browserSync( ['./public/**/*'],{
    server: {
              baseDir: './public'
            }
  });
});

