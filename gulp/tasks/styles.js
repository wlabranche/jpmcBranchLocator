'use strict';

var gulp = require( 'gulp' );
var stylus = require( 'gulp-stylus' );

gulp.task( 'styles', function() {
  gulp.src( './app/**/*.styl' )
      .pipe( stylus() )
      .pipe( gulp.dest( './public/styles/' ) );
});