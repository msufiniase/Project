/* Given the 'id' attribute of a form element, 
   this will return the value entered by the user 
	 into that form element. */
function formValue(id) {
  // ??? - for the above function we told to name id which it is the parameter that extracts it from the html code.  
  let formElement = document.getElementById(id);  // we told it to extract the id by id from the html code that is labeled or that we named our id in the html code which in this code it is the parameter inside the parathensis.
  
  // ??? - 
  if (formElement === null) {  // the if statement is saying that if the element from html code of the id is equal null (undefined), meaning nothing has been defined or declared a variable 
    return `[${id} NOT FOUND]`;  // and return that null arguement of the id from html code that has not been found, in other word, a message will appear saying there is nothing to be found in that element of id. 
  }

  let value = formElement.value; // declared a variable and we equaled that to the element of the form which, if anything is typed, it will gives us any value that is based on the declaration for the form of the element which is the id

	// ???
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {
  
  // Retrieve form values
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");
    
  // Insert form values into madlib
  let madLib = `
    Dear ${relative},
  <br><br>
  I have been having a really ${adjective1} time 
  at camp. The counselour is ${adjective2} and 
  the food is ${adjective3}. I met ${famousPerson}
  and we quickly became ${noun}. Talk soon!
  <br><br>
  Your ${dessert},
  <br>
  ${petName}
`;

  // Output madlib to player 
  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
  
}