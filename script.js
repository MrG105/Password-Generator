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

function generatePassword() {
  var combinedArrays = [ltrsLow];
    if(useLtrsUp === true){
      combinedArrays = combinedArrays.concat(ltrsUp);
    }
    if(useNums === true){
      combinedArrays = combinedArrays.concat(nums);
    }
    if(useSpChar === true){
      combinedArrays = combinedArrays.concat(spChar);
    }
  for(i=0;i<=combinedArrays;i++){
    password.push(combinedArrays[Math.floor(Math.random()*PwLength.length)]);
  }
  // return password;
}

// Run the generator for the first time
// generatePassword();