// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// TODO:
// Write Arrays: Letters (lowercase), Letters (uppercase,) Numbers, Special Characters.
// Write Prompts: Y/N for Letters, Numbers, and Special Characters; Length of password (8-128 char);
// Write Function: When all prompts answered, combine previous 3 functions to display a single password in the #password section.

// Arrays for password options

var ltrsLow = 'abcdefghijklmnopqrstuvwxyz'.split('')
var ltrsUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split('')
var nums = '1234567890' .split('')
var spChar = '!@#$%^&*()' .split('')

// Prompts for Password Selection
var useLtrsUp = window.confirm ("Include Upper Case Letters?")
var useNums = window.confirm ("Include Numbers?")
var useSpChar = window.confirm ("Include Special Characters?")
var PwLength = window.prompt ("Desired Length of Password? Between 8 and 128 characters")

console.log(useLtrsUp)
console.log(useNums)
console.log(useSpChar)
console.log (PwLength)
// Combine Arrays Function

// Run the generator for the first time
generatePassword();