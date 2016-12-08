"use strict";

/* global QUnit */
/* global factorial */

QUnit.test( "Factorial of 0 returns 1", function( assert ) {
  assert.ok( factorial(0) == 1, "Passed!" );
});

QUnit.test( "Factorial of 5 returns 120", function( assert ) {
  assert.ok( factorial(5) == 120, "Passed!" );
});

QUnit.test( "Factorial of 27 returns 10888869450418352160768000000", function( assert ) {
  assert.ok( factorial(27) == 10888869450418352160768000000, "Passed!" );
});

QUnit.test( "Factorial of 28 fails as it does not return 304888344611713860501504000000", function( assert ) {
  assert.ok( factorial(28) != 304888344611713860501504000000, "Passed!" );
});

QUnit.test( "Factorial of -1 returns NaN", function( assert ) {
  assert.ok( isNaN(factorial(-1)), "Passed!" );
});

QUnit.test( "Factorial of 5.5 returns NaN", function( assert ) {
  assert.ok( isNaN(factorial(5.5)), "Passed!" );
});

QUnit.test( "Factorial of -5.5 returns NaN", function( assert ) {
  assert.ok( isNaN(factorial(-5.5)), "Passed!" );
});

QUnit.test( 'Factorial of "abcd" returns NaN', function( assert ) {
  assert.ok( isNaN(factorial("abcd")), "Passed!" );
});

QUnit.test( 'Factorial of "5abcd6" returns NaN', function( assert ) {
  assert.ok( isNaN(factorial("5abcd6")), "Passed!" );
});

QUnit.test( 'Factorial of true returns NaN', function( assert ) {
  assert.ok( isNaN(factorial(true)), "Passed!" );
});

QUnit.test( 'Factorial of false returns NaN', function( assert ) {
  assert.ok( isNaN(factorial(false)), "Passed!" );
});

QUnit.test( 'Factorial of 5.0 returns 120', function( assert ) {
  assert.ok( factorial(5.0) == 120, "Passed!" );
});