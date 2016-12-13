/**
 * @fileOverview Logging function
 * @author Anoop V. Mathew (anoop.v.mathew@gmail.com)
 * @version 1.0
 */

/* exported logMsg */

/* global DEBUG_LEVEL */
/* global console */

"use strict";

// Debug Levels

/** @const [number LOG]*/
const LOG = 1; 
/** @const [number INFO]*/
const INFO = 2;
/** @const [number WARN]*/
const WARN = 3;
/** @const [number ERROR]*/
const ERROR = 4;

// Ensure that calling console.log() will not throw an error if window.console doesn't exist
if ( window.console === undefined ) { 
    window.console = { // Define a window.console object with an empty log method
        log: function(){} 
    }; 
} 

/**
* Log messages to the console if global DEBUG_LEVEL is positive
* <br><br><b>Note:</b> DEBUG_LEVEL is the minimum severity level of messages to be logged. 
* <br>Therefore, DEBUG_LEVEL = WARN will also ensure logging of ERROR level messages
* @param {string} message Message to be logged
* @param {string} [level=LOG] Optional argument specifying the level of the log message 
* - LOG, INFO, WARN, ERROR
* @example
* var DEBUG_LEVEL = INFO
* log("this is a log message", INFO);
*/
function logMsg(message, level=0) {
    if (DEBUG_LEVEL > 0) {

        switch (Number.parseInt(level)) {
            case LOG:
                if (DEBUG_LEVEL <= LOG) console.log(message);
                break;
            case INFO: 
                if (DEBUG_LEVEL <= INFO) console.info(message);
                break;
            case WARN: 
                if (DEBUG_LEVEL <= WARN) console.warn(message);
                break;
            case ERROR:
                if (DEBUG_LEVEL <= ERROR) console.error(message);
                break;
            default:
                console.log(message);
        }

    }
}