const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container"); // I target the css tag
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using constraint API
  isValid = form.checkValidity();
  // custom main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all requested fiels!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Check if pass are matching
  if (password1El.value === password2El.value && password1El.value.length > 1) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = " The passwords does not match";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }

  if (isValid && passwordsMatch) {
    message.textContent = "Succesfuly Registered";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

storeFormData = () => {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
};

function processFormData(e) {
  e.preventDefault();
  //method to validate the form
  validateForm();
  // submit data if the form is valid and the pass matches
  isValid && passwordsMatch
    ? storeFormData()
    : console.log("error, please check again the form");
}

//Event Listener
form.addEventListener("submit", processFormData);
