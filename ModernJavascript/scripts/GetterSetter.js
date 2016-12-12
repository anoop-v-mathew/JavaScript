/**
* @fileOverview Illustrating dynamic Getter/Setter functionality of ES2015
* <br> This is based on the online class 
* <a href="http://courses.angularclass.com/courses/modern-javascript">Modern Javascript</a>
* @author Anoop V. Mathew (anoop.v.mathew@gmail.com)
* @version 1.0
*/

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
		return (this.firstName + 
				((this.middleName === "") ? "" : " " + this.middleName) + 
				((this.lastName === "") ? "" : " " + this.lastName)).trim(); // trim leading whitespace
	},
	set fullName(arg) { // split full name passed in as agreement and assign
		var nameArray = arg.split(" ");
		this.firstName = nameArray[0];
		this.middleName = nameArray[1];
		this.lastName = nameArray[2];
	}
};

var sName = "Anoop Varughese Mathew";

personName.fullName = sName;
console.log(personName.firstName);
console.log(personName.middleName);
console.log(personName.lastName);

personName.firstName = "Aditya";
personName.middleName = "Verghese";
personName.lastName = "Mathew";

console.log(personName.fullName);
