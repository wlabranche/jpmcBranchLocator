'use strict';

var gulp = require( 'gulp' );

gulp.task( 'assets', function() {
  gulp.src( './assets/**/*', { base: './' } )
      .pipe( gulp.dest( './public/' ));
});
