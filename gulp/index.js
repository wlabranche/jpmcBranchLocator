'use strict';

var fs = require( 'fs' );
var tasks = fs.readdirSync( __dirname + '/tasks' );

tasks.forEach( function ( task ) {
  require( __dirname + '/tasks/' + task );
});

