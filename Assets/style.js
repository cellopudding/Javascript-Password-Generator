var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"]

var result = []
var possibleCharacters = []
var guaranteedCharacters = []
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
var len = parseInt(prompt ("How many characters would you like password to contain between 8-128"))
console.log(len)
if (len< 8 || len > 128) {
    alert ("Must be between 8-128 characters")
    return null
}

if (Number.isNaN(len)) {
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
    len:len,
    hasLowercase:hasLowercase,
    hasUppercase:hasUppercase,
    hasNumbers:hasNumbers,
    hasSymbols:hasSymbols,
}


//3. Generate password based on criteria


if (!passwordCriteria) {
    return null
}
if (passwordCriteria.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase)
    guaranteedCharacters.push(getRandom(lowercase))
}

if (passwordCriteria.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase)
    guaranteedCharacters.push(getRandom(uppercase))
}
if (passwordCriteria.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers)
    guaranteedCharacters.push(getRandom(numbers))
}
if (passwordCriteria.hasSymbols) {
    possibleCharacters = possibleCharacters.concat(symbols)
    guaranteedCharacters.push(getRandom(symbols))
}
//4. display message on page 
//do same for other criteria, then loop through password criteria then one for possible characters
//lookup join method


 for (var i = 0; i < passwordCriteria.length; i++) {
       var possibleCharacter = getRandom(possibleCharacters);

       result.push(possibleCharacter);
}


   // Mix in at least one of each guaranteed character in the result
   for (var i = 0; i < guaranteedCharacters.length; i++) {
    console.log(guaranteedCharacters.length)
     result[i] = guaranteedCharacters[i];
}
console.log(result)
console.log(guaranteedCharacters[i])
return result.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
