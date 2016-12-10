"use strict";

/* global QUnit */
/* global factorial */

QUnit.test( "Positive Test Cases - factorial calculated correctly for these numbers", function( assert ) {
  assert.ok( factorial(0) === 1, "Passed! - Factorial of 0 returns 1" );
  assert.ok( factorial(5) === 120, "Passed! - Factorial of 5 returns 120" );
  assert.ok( factorial(5.0) === 120, "Passed! - Factorial of 5.0 returns 120" );  
  assert.ok( factorial(27) === 10888869450418352160768000000, "Passed! - Factorial of 27 returns 10888869450418352160768000000" );  
});

QUnit.test( "Negative Test Case - factorial value higher than what can be stored with precision as number", function( assert ) {
  assert.ok( factorial(28) !== 304888344611713860501504000000, "Passed! - Factorial of 28 fails as it does not return 304888344611713860501504000000" );
});

QUnit.test( "Negative Test Cases - factorial is undefined for these numbers", function( assert ) {
  assert.ok( isNaN(factorial(-1)), "Passed! - Factorial of -1 returns NaN" );
  assert.ok( isNaN(factorial(5.5)), "Passed! - Factorial of 5.5 returns NaN" );  
  assert.ok( isNaN(factorial(-5.5)), "Passed! - Factorial of -5.5 returns NaN" );  
});

QUnit.test( 'Negative Test Cases - Argument passed is not a number', function( assert ) {
  assert.ok( isNaN(factorial("abcd")), "Passed! - Factorial of 'abcd' returns NaN" );
  assert.ok( isNaN(factorial("5abcd6")), "Passed! - Factorial of '5abcd6' returns NaN" );  
  assert.ok( isNaN(factorial(true)), "Passed! - Factorial of true returns NaN" ); 
  assert.ok( isNaN(factorial(false)), "Passed! - Factorial of false returns NaN" );
});
