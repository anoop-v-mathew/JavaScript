/* exported factorial */

"use strict";

function factorial(arg) {

    var f, n = 0;

    // check if argument is boolean as Number() converts boolean to number
    if (typeof arg === "boolean") {
        n = NaN;
    } else {
        n = Number(arg); // convert argument to number
    }

    // factorial is valid only for non-negative integers
    if (Number.isInteger(n) && (n >= 0)) { 
        // return 1 if argument is 0, else recurse
        f = (n === 0) ? 1 : n * factorial(n - 1); 
    } else {
        f = NaN;	
    }

    return f;
}