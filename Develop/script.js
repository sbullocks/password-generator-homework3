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

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?") //Prompt will have a "OK or Cancel option". This is a boolean. OK moves to next statement if any and Cancel stops.
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")

//Creeated array to include all categories above.
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["~", "`", "!",  "@", "#", "$", "%", "^", "&", "*", "()", "_", "-", "+", "=", "{", "[", "}", "]", "|"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var randomList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",  "@", "#", "$", "%", "^", "&", "*", "()", "_", "-", "+", "=", "{", "[", "}", "]", "|", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// for (var i = 0; i , lowercaseList.length; i++) { //This allows for you to copy the list of letters and paste them as uppercase vs typing them out again. You would leave one letter section above blank.
  //   uppercaseList[i] = lowercaseList[i].toUpperCase()
  // }

  var optionsList = []

  if (userWantsNumbers === true) { //If the user selects (true), the specific list will be available for the user to select from. You can confirm this with a test in the console log. console.log(optionsList). Shows the array list of the statements passed as (true). This is where the randomizer selects from based on criteria as (true).
    optionsList.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsList.push(symbolList)
  }
  
  if (userWantsUppercase === true) {
    optionsList.push(uppercaseList)
  }

  if (userWantsLowercase === true) {
    optionsList.push(lowercaseList)
  }

  if (optionsList.length === 0) { //If the user selects (false) to all the criteria, then this will defaut to a specific list pre-defined. Created a random list with all characters.
    optionsList.push(randomList) 

  }
// console.log(optionsList) //Goes with section above for testing.

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 