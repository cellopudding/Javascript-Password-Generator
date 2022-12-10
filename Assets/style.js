// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("You clicked me real good...")

//1. Prompt user for the password criteria 
//   a. Password length between 8-128
//   b. Lowercase
//   c. Upercase
//   d. Numbers
//   e. Symbools
//2. Validate the input 
//3. Generate password based on criteria






//4. Display password on the page
    

    return "Look at me, here..."
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
