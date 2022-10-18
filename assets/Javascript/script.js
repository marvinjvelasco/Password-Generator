// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  // Confirming Password Length
  var userInput = prompt("How many characters would you like for your password?");
  var characterLength = parseInt(userInput);
  if (characterLength < 128 && characterLength > 8) {
    alert("You must choose a number between 8 and 128.");
  }
  // Confirm lower Case
  var confirmLowercase = (confirm('Would you like lower cases?'));
  // Confirm Upper Case
  var confirmUpperCase = (confirm('Would you like upper case?'));
  // Confirm Numners
  var confirmNumber = (confirm('Would you like numbers?'));
  //  Confirm Special Characters
  var confirmCharList = (confirm('Would you like special characters?'));

  var passwordOptions = [];

  // Merging User preferences using Concat function
  if (confirmLowercase === true) {
    passwordOptions = passwordOptions.concat(lowerCase);
    console.log(passwordOptions);
  }
  if (confirmUpperCase === true) {
    passwordOptions = passwordOptions.concat(upperCase);
    console.log(passwordOptions);
  }
  if (confirmNumber === true) {
    passwordOptions = passwordOptions.concat(numberList);
    console.log(passwordOptions);
  }
  if (confirmCharList === true) {
    passwordOptions = passwordOptions.concat(charList);
    console.log(passwordOptions);
  }

  // Using for loop and Math function to generate randomization of user preferences
  var passwordResult = "";
  for (var i = 0; i <= characterLength; i++) {
    passwordResult = passwordResult + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    console.log(passwordResult) 
  }

  return passwordResult;
}