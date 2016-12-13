"use strict";

/* global QUnit */
/* global personName */

QUnit.test( "Positive Test Cases - persons with 3 names", function( assert ) {

	var sName = "Harry James Potter";

	personName.fullName = sName;
	assert.ok( personName.firstName === "Harry", 
		"Passed! - Returns 'Harry' for first name of 'Harry James Potter'" );
	assert.ok( personName.middleName	 === "James", 
		"Passed! - Returns 'James' for middle name of 'Harry James Potter'" );
	assert.ok( personName.lastName === "Potter", 
		"Passed! - Returns 'Potter' for last name of 'Harry James Potter'" );

	personName.firstName = "Ronald";
	personName.middleName = "Bilius";
	personName.lastName = "Weasley";

	assert.ok( personName.fullName === "Ronald Bilius Weasley", 
		"Passed! - Returns 'Ronald Bilius Weasley' for full name of 'Ronald', 'Bilius' & 'Weasley'" );
});

QUnit.test( "Positive Test Cases - persons with 2 names", function( assert ) {

	var sName = "Minerva McGonagall";

	personName.fullName = sName;
	assert.ok( personName.firstName === "Minerva", 
		"Passed! - Returns 'Minerva' for first name of 'Minerva McGonagall'" );
	assert.ok( personName.middleName === "", 
		"Passed! - Returns '' for middle name of 'Minerva McGonagall'" );
	assert.ok( personName.lastName === "McGonagall", 
		"Passed! - Returns 'McGonagall' for last name of 'Minerva McGonagall'" );

	personName.firstName = "Rubeus";
	personName.middleName = "";
	personName.lastName = "Hagrid";

	assert.ok( personName.fullName === "Rubeus Hagrid", 
		"Passed! - Returns 'Rubeus Hagrid' for full name of 'Rubeus', '' & 'Hagrid'" );  
});

QUnit.test( "Positive Test Cases - persons with 1 name", function( assert ) {

	var sName = "Seal";

	personName.fullName = sName;
	assert.ok( personName.firstName === "Seal", 
		"Passed! - Returns 'Seal' for first name of 'Seal'" );
	assert.ok( personName.middleName === "", 
		"Passed! - Returns '' for middle name of 'Seal'" );
	assert.ok( personName.lastName === "", 
		"Passed! - Returns '' for last name of 'Seal'" );

	personName.firstName = "Madonna";
	personName.middleName = "";
	personName.lastName = "";

	assert.ok( personName.fullName === "Madonna", 
		"Passed! - Returns 'Madonna' for full name of 'Madonna', '' & ''" ); 
});

QUnit.test( "Positive Test Cases - persons with more than 3 names", function( assert ) {

	var sName = "Albus Percival Wulfric Brian Dumbledore";

	personName.fullName = sName;
	assert.ok( personName.firstName === "Albus", 
		"Passed! - Returns 'Albus' for first name of '    Albus   Percival    Wulfric Brian  Dumbledore   '" );
	assert.ok( personName.middleName === "Percival Wulfric Brian", 
		"Passed! - Returns 'Percival Wulfric Brian' for middle name of 'Albus Percival Wulfric Brian Dumbledore'" );
	assert.ok( personName.lastName === "Dumbledore", 
		"Passed! - Returns 'Dumbledore' for last name of 'Albus Percival Wulfric Brian Dumbledore'" );

	personName.firstName = "Albus";
	personName.middleName = "Percival Wulfric Brian";
	personName.lastName = "Dumbledore";

	assert.ok( personName.fullName === "Albus Percival Wulfric Brian Dumbledore", 
		"Passed! - Returns 'Albus Percival Wulfric Brian Dumbledore' for full name of 'Albus', 'Percival Wulfric Brian' & 'Dumbledore'" );  
});

QUnit.test( 'Negative Test Cases - extra whitespace', function( assert ) {

	var sName = "    Albus   Percival    Wulfric Brian  Dumbledore   ";

	personName.fullName = sName;
	assert.ok( personName.firstName === "Albus", 
		"Passed! - Returns 'Albus' for first name of '    Albus   Percival    Wulfric Brian  Dumbledore   '" );
	assert.ok( personName.middleName === "Percival Wulfric Brian", 
		"Passed! - Returns 'Percival Wulfric Brian' for middle name of '    Albus   Percival    Wulfric Brian  Dumbledore   '" );
	assert.ok( personName.lastName === "Dumbledore", 
		"Passed! - Returns 'Dumbledore' for last name of '    Albus   Percival    Wulfric Brian  Dumbledore   '" );

	personName.firstName = "  Albus  ";
	personName.middleName = "  Percival Wulfric Brian  ";
	personName.lastName = "   Dumbledore   ";

	assert.ok( personName.fullName === "Albus Percival Wulfric Brian Dumbledore", 
		"Passed! - Returns 'Albus Percival Wulfric Brian Dumbledore' for full name of '  Albus  ', '  Percival Wulfric Brian  ' & '   Dumbledore   '" );  
});
