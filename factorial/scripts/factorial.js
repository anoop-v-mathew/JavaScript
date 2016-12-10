/**
 * @fileOverview Factorial function
 * @author Anoop V. Mathew (anoop.v.mathew@gmail.com)
 * @version 1.0
 */

/* exported factorial */

/* global logMsg */
/* global INFO */
/* global WARN */

"use strict";

/**
* Calculate the factorial of <tt>arg</tt>, if it is a non-negative integer.
* Return NaN otherwise
* @param {number} arg The number for which the factorial will be calculated
* @returns {number}
* @example
* var n = 5;
* console.log(factorial(5)); // 120
*
*/
function factorial(arg) {

    var f = 0; 
    var n = 0;

    logMsg("arg: " + arg, INFO);
    logMsg("typeof arg: " + (typeof arg), INFO);
    
    // check if argument is boolean as Number() converts boolean to number
    if (typeof arg === "boolean") {
        n = NaN;
        logMsg("argument is not a number: " + arg + " (" + (typeof arg) + ")", WARN);
    } else {
        n = Number(arg); // convert argument to number
    }

    // factorial is valid only for non-negative integers
    if (Number.isInteger(n) && (n >= 0)) { 
        // return 1 if argument is 0, else recurse
        f = (n === 0) ? 1 : n * factorial(n - 1); 
    } else {
        f = NaN;
        logMsg("factorial cannot be calculated for '" + arg + "'", WARN);    
    }

    return f;
}