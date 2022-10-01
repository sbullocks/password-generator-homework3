// Assignment Code
var generateBtn = document.querySelector("#generate"); //This is the red button on the page coming from the html.

function generatePassword() {

  // var userInput = window.prompt("hello") //Write a string in the () to show in prompt message. ex: this page says ("click in textbox below")
  // console.log(userInput) //This will log the users input into the console log. Used this as test to make sure its working.

  var userInput = window.prompt("How long do you want your password to be?") //Need this to be read as a number.

  var passwordLength = parseInt(userInput) //This will allow a "sting" to be passed and read as a number. If cannot be read as number, console log will return NaN (not a number).

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 