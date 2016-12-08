function factorial(s) {

	// check if argument is boolean as Number() converts boolean to number
	if (typeof(s) == 'boolean') return NaN;

	n = Number(s); // convert string to number
	
	if (Number.isInteger(n) && (n >= 0)) { // factorial is valid only for non-negative integers
		return (n == 0) ? 1 : n*factorial(n-1); // return 1 if argument is 0, else recurse
	} else {
		return NaN; // factorial cannot be determined for negative numbers
	}
}
