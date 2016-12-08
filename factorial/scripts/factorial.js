function factorial(arg) {

    "use strict";

    var f, n = 0;

    // check if argument is boolean as Number() converts boolean to number
    if (typeof arg === "boolean") {
        n = NaN;
    } else {
        n = Number(arg); // convert argument to number
    }

    if (Number.isInteger(n) && (n >= 0)) { // factorial is valid only for non-negative integers
        f = (n === 0) ? 1 : n * factorial(n - 1); // return 1 if argument is 0, else recurse
    } else {
        f = NaN;
    }

    return f;
}