'use strict';

var gulp = require( 'gulp' );

gulp.task( 'watch', ['setWatch', 'test', 'browserSync'], function () {
  gulp.watch( 'index.jade', ['html'] );
  gulp.watch( './app/**/*.styl', ['styles'] );
  gulp.watch( './assets/*', ['assets']);
});

