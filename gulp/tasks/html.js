'use strict';

var gulp = require( 'gulp' );
var jade = require( 'gulp-jade' );

gulp.task( 'html', function () {
  gulp.src( 'index.jade' )
      .pipe( jade({
        pretty: true
      }))
      .pipe( gulp.dest( 'public' ) );
});

