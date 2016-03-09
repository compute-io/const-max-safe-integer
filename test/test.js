'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var MAX_SAFE_INTEGER = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof MAX_SAFE_INTEGER, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 2**53-1', function test( t ) {
	t.equal( MAX_SAFE_INTEGER, pow(2,53)-1, 'returns 2**53-1' );
	t.end();
});
