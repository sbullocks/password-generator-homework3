// Assignment Code
var generateBtn = document.querySelector("#generate"); //This is the red button on the page coming from the html.

function generatePassword() {

  // var userInput = window.prompt("hello") //Write a string in the () to show in prompt message. ex: this page says ("click in textbox below")
  // console.log(userInput) //This will log the users input into the console log. Used this as test to make sure its working.

  var userInput = window.prompt("How long do you want your password to be?") //Need this to be read as a number.

  var passwordLength = parseInt(userInput) //This will allow a "sting" to be passed and read as a number. If cannot be read as number, console log will return NaN (not a number).

  if (isNaN(passwordLength)) { //If passwordLength is true, then it will result in a number. IF it is a number, it will move to the next else or else if.. if there are any more.
    window.alert("That's not a number!")
    return //If the input is not a number (false), then this will end the prompt. It will not go to the next statement. It will return to the call function (var password = generatePassword();)
  } //else { //This else statement is technically not needed because if the above is (false), it will return to the original prompt.
    //window.alert("That is a valid number!") 
  //}

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters.")
    return
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 