Form Validator - 
A basic form registration created just for the front-end with HTML, CSS and JavaScript. 
I used the most inputs elements for the and I add some interaction with the client-side with JS ant the HTML build-in form elements. 
For the password validation pattern I used the help of the https://regexr.com/3bfsi and made a pattern which require a min of 8 characters with at least a capital letter and a numbersfor setting up the password. 
 pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"

For submitting the data from the form I did the following:
-	Create variables for each element with I want to interact (the form, the password1 and 2 to create an if statement for matching them, the message and its CSS). 
-	const form = document.getElementById("form");
-	const password1El = document.getElementById("password1");
-	const password2El = document.getElementById("password2");
-	const messageContainer = document.querySelector(".message-container"); // I target the css tag
-	const message = document.getElementById("message");

-	then I have to create an event for submitting the form. By default, after the submission is triggered, the form resets to default. For preventing that I use the preventDefault() event method.

-	To validate the form I used the checkValidity() method with the mention that for the HTML to let me to check the validity of the form, I have to mention the novalidate attribute to the HTML form tag, otherwise the form will never submit if is completed wrong because the event will not be triggered by the HTML restrictions. 

<form id="form" novalidate>

Resources:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
https://www.w3schools.com/html/html_forms.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/:valid
https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
https://rangle.io/blog/how-to-store-user-passwords-and-overcome-security-threats-in-2017
