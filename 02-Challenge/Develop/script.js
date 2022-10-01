// Assignment Code
var generateBtn = document.querySelector("#generate"); //This is the red button on the page coming from the html.


function generatePassword() {

  window.prompt()

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //This function was not written so I added it above. Displays the random characters displayed "password-text".
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When you click on button it will run the function to write the password.
