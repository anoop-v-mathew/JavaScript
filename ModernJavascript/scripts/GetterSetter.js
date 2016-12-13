/**
* @fileOverview Illustrating dynamic Getter/Setter functionality of ES2015
* <br> This is based on the online class 
* <a href="http://courses.angularclass.com/courses/modern-javascript">Modern Javascript</a>
* @author Anoop V. Mathew (anoop.v.mathew@gmail.com)
* @version 1.0
*/

/* exported personName */

/* global logMsg */
/* global INFO */
/* global WARN */

"use strict";

/**
 * @class
 */
var personName = {
	/** @property {string} firstName The first name of the person */
	firstName: "",
	/** @property {string} middleName The middle name of the person */
	middleName: "",
	/** @property {string} lastName The last name of the person */
	lastName: "",
	/** @property {string} fullName Dynamically derived/created full name of the person*/
	get fullName() { // concatenate names, introducing whitespace where necessary
		var fName = (this.firstName.trim() + 
				((this.middleName.trim() === "") ? "" : " " + this.middleName.trim()) + 
				((this.lastName === "") ? "" : " " + this.lastName.trim())).trim(); // trim leading whitespace
		logMsg("fName: |" + fName + "|", INFO);
		return fName;
	},
	set fullName(arg) { // split full name passed in as argument and assign
		// if there are more than 3 names, the middleName property holds the extra names
		// if there is only one name, it is stored in the firstName
		// if there are only 2 names, the middleName is empty
		this.firstName = this.middleName = this.lastName = "";
		if (arg.trim().length > 0) {

			// trim leading and trailing spaces and then split into array elements
			var nameArray = arg.trim().split(" ");
			var len = nameArray.length;

			this.firstName = nameArray[0];

			// aggregate all the middle names, ignoring multiple spaces (if any)
			for (var i = 1; i <= (len-2); i++ ) {
				if (nameArray[i].trim() !== "") {
					this.middleName += (nameArray[i] + " ");
				}
			}
			this.middleName = this.middleName.trim(); //remove trailing whitespace

			// if more than one name, then store the last name
			if (len > 1) {
				this.lastName = nameArray[len-1];
			}
		}

		logMsg("firstName: |" + this.firstName + "|", INFO);
		logMsg("middleName: |" + this.middleName + "|", INFO);
		logMsg("lastName: |" + this.lastName + "|", INFO);
    
	}
};

