// Assignment Code
var generateBtn = document.querySelector("#generate"); //This is the red button on the page coming from the html.

function randomInt(min, max) { //Returns a random interger between min-max. 

  if (!max) { //If max is not defined, we want range from 0-min.
    max = min 
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max) //Removes the decimal from the number. This will also give a random interger betwen the min-max.
}

function getRandomItem(list) {
  return list[randomInt(list.length)] 
}


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


// //This section from lines 42-62 is a secondary option. This will make the user keep selecting until the conditions are met for number and length. This will keep looping the statements. If not using this, use above which will exit (return); undefined.
//   while (true) { //While Loop - this will ignore the (return) above and keep repeating the statement until the (true) criteria is met. Once the users input is valid, it will break the loop and look for next statement.

//   var userInput = window.prompt("How long do you want your password to be?") 

//   console.log(userInput)
//   if (userInput === null) {  //null means the user selected cancel. It will exit the function. It will do nothing futher but user is not stuck in the loop.
//       return
// }

//   var passwordLength = parseInt(userInput) 

//   if (isNaN(passwordLength)) { 
//     window.alert("That's not a number!")
//   } else if (passwordLength < 8 || passwordLength > 128) {
//     window.alert("Invalid password length. Required to be between 8 and 128 characters.")
//   } else {
//     break //If it is both a number and meets the length criteria, break loop and move to next statement.
//   } 

// }

//This goes with lines 42-62. If you want to break the loop even with (false "cancel button"), you can with (null). 
//Added to lines 47-50.


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

var generatedPassword = "" //However long the password lenght is. It will be input into the empty string.

for (var i = 0; i < passwordLength; i++) {
  // Math.random() //This will always be a random number betwen 0-1. We want a random interger. Created a function at top in line 4.
  var randomList = getRandomItem(optionsList) //This will allow random item to be selected from a list. Moved this to line 8 as a function to call any random list.
  var randomChar = getRandomItem(randomList)
  // console.log(randomChar) //Test to make sure that a random character is selected from the list. 
  generatedPassword += randomChar
}
// console.log(generatedPassword) //Test to make sure generated password works. Used to test true and false options of user selections.
return generatedPassword  //Prints the randomly generated password on the screen for the user to see. Shows undefined if password creteria not met.
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //This function was not written so I added it above. Displays the random characters displayed "password-text".
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //The password generated will be the password. If password does not meet creteria, it will return undefined.

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When you click on button it will run the function to write the password.