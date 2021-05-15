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


// Arrays for password options

var lCase = 'abcdefghijklmnopqrstuvwxyz';
var uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '1234567890';
var symbol = '!@#$%^&*()';

// Prompts for Password Selection
var useLtrsUp = window.confirm ("Include Upper Case Letters?")
var useNums = window.confirm ("Include Numbers?")
var useSpChar = window.confirm ("Include Special Characters?")
var PwLength = Number(window.prompt ("Desired Length of Password? Between 8 and 128 characters"))

// Combined Array based on user input
var combinedArrays = lCase;
    if(useLtrsUp === true){
      combinedArrays = combinedArrays.concat(uCase);
    }
    if(useNums === true){
      combinedArrays = combinedArrays.concat(number);
    }
    if(useSpChar === true){
      combinedArrays = combinedArrays.concat(symbol);
    }


// Generate Password Function using random strings from the Combined Array

function generatePassword() {
  let pass = '';
  for(let i=0;i<PwLength;i++){
    pass += combinedArrays.charAt(Math.floor(Math.random() * combinedArrays.length))
  }
  return pass;
}