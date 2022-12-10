var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var Symbols = ["!", "@", "#", "$", "%", "^", "&", "*"]
// Assignment Code
var generateBtn = document.querySelector("#generate");
function getRandom(arr){
    var randomIndex = Math.floor(Math.random()*arr.length)
    var randomElement = arr[randomIndex]
    return randomElement
}

function generatePassword() {
    
    //1. Prompt user for the password criteria 
//   a. Password length between 8-128 (prompt)
var L = parseInt(prompt ("How many characters would you like password to contain between 8-128"))

if (L< 8 || L > 128) {
    alert ("Must be between 8-128 characters")
    return null
}

if (Number.isNaN(L)) {
    alert ("Must be a number")
    return null
}
//   b. Lowercase
var hasLowercase = confirm ("Would you like to include Lowercase letters?")
//   c. Upercase 
var hasUppercase = confirm ("Would you like to include Uppercase letters?")
//   d. Numbers
var hasNumbers = confirm ("Would you like to include numbers?")
//   e. Symbools
var hasSymbols = confirm ("Would you like to include symbols")

//2. Validate the input

if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSymbols) {
    alert ("Must pick at least one criteria")
    return null
}

//Save Criteria to an object

var passwordCriteria = {
    L:L,
    hasLowercase:hasLowercase,
    hasUppercase:hasUppercase,
    hasNumbers:hasNumbers,
    hasSymbols:hasSymbols,
}

//3. Generate password based on criteria
var result = []
var possibleCharacters = []
var guaranteedCharacters = []

if (!passwordCriteria) {
    return null
}
if (passwordCriteria.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(Lowercase)
    guaranteedCharacters.push(getRandom(Lowercase))
}
if (passwordCriteria.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(Uppercase)
    guaranteedCharacters.push(getRandom(Uppercase))
}
if (passwordCriteria.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(Numbers)
    guaranteedCharacters.push(getRandom(Numbers))
}
if (passwordCriteria.hasSymbols) {
    possibleCharacters = possibleCharacters.concat(Symbols)
    guaranteedCharacters.push(getRandom(Symbols))
}
//4. display message on page 
//do same for other criteria, then loop through password criteria then one for possible characters
//lookup join method
or (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }






    

    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
