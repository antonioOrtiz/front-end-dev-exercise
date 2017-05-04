const css = require('../scss/styles.scss');

var  formData = {
    firstName: null,
    lastName: null,
    email: null,
    stateInput: null
}

var theForm = document.querySelector("form");
var firstNameInput = document.getElementById("firstNameInput");
var lastNameInput = document.getElementById("lastNameInput");
var emailInput = document.getElementById("emailInput");
var stateInput = document.getElementById("stateInput");

theForm.addEventListener('submit', function(e) {
  if (validate(e)) {
    formData['firstName'] = firstNameInput.value;
    formData['lastName'] = lastNameInput.value;
    formData['email'] = emailInput.value;
    formData['stateInput'] = stateInput.value;
    logger('There is now data from the form: :) ');
  }
}, false);

function validate(e) {  
  // Error tracking variable
  var error = false;

  // Do validations
  var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (firstNameInput.value.trim() === '') {
    firstNameInput.classList.add('invalid-input');
    firstNameInput.nextElementSibling.style.display = 'block';
    firstNameInput.nextElementSibling.innerHTML = 'Not valid!';
    error = true;
   }

   if (lastNameInput.value.trim() === '') {
     lastNameInput.classList.add('invalid-input');
     lastNameInput.nextElementSibling.style.display = 'block';
     lastNameInput.nextElementSibling.innerHTML = 'Not valid!';
     error = true;
   }

   if (!emailPattern.test(emailInput.value.trim())) {
     emailInput.classList.add('invalid-input');
     emailInput.nextElementSibling.style.display = 'block';
     emailInput.nextElementSibling.innerHTML = 'Please enter valid email address!';
     error = true;
   }

   if (stateInput.value === 'selectstate') {
     stateInput.classList.add('invalid-input');
     stateInput.nextElementSibling.style.display = 'block';
     stateInput.nextElementSibling.innerHTML = 'Not valid!';
     error = true;
   }

   // If error, stop the event
   if (error) {
     e.preventDefault();
     e.stopPropagation();
     logger('There is at least one empty field in the form: ');
     return false;
   } else {
     return true;
   }
}
    
function logger(message){
  console.clear();
  console.log(message);
  for (var prop in formData) {
    console.log(prop + ' : ' + formData[prop]);
    
    // This line will fail here in Stack Overflow, but is correct and
    // will work in a real browser environment. Uncomment it for your use.
    localStorage.setItem(prop, formData[prop]);
  }
}