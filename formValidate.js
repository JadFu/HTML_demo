
function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;


}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('reset form?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
		document.getElementById("firstname").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {

	//information check
	let errorFlag = false;

	let Info = ["firstname", "lastname","email"];

	for(let i=0; i<Info.length; i++){
		let textField = document.getElementById(Info[i]);
		if(!hasInput(textField)){
			document.getElementById(Info[i]+"_error").style.display = "block";
			if(!errorFlag){
				textField.focus();
				textField.select();
			}
			errorFlag = true;
		}
	}


	//email check
	//RegExp format string@string.string
	//RegExp also checking multiple @
	let regexE = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

	let emailText = document.getElementById("email").value;

	if(!regexE.test(emailText)){
		document.getElementById("emailformat_error").style.display = "block";
		if(!errorFlag){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}
		errorFlag = true;
	}

	return errorFlag;
}


//helper function to check input
function hasInput(fieldElement){
	if(fieldElement.value == null || trim(fieldElement.value) == ""){
		return false;
	}
	return true;
}

function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}


/*
 * Adds an item to the cart and hides the quantity and add button for the product being ordered.
 *
 * param itemNumber The number used in the id of the quantity, item and remove button elements.
 */


/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() {
	//	Populate the year select with up to date values

	// Add event listener for the form submit
	document.getElementById("commendForm").addEventListener("submit", validate);
	document.getElementById("commendForm").reset();
	document.getElementById("commendForm").addEventListener("reset", resetForm);
	hideErrors();
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);












