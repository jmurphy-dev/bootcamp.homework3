// Assignment Code
var generateBtn = document.querySelector("#generate");

//user parameters

var parameters = {
  //aquire password generation parameters
  passwordLength: function()  {
    var length = prompt("Chose a password length between 8 and 128 characters");

    console.log(`Chosen length :: ${length}`);
  },

  chooseDictionary: function() {

  }
  

};


//Arrays of characters
var dictionary = {
  "uppercase" : [],
  "lowerCase" : [],
  "numbers"   : [],
  "symbols"   : []
};


// Generate password
function generatePassword(dictionary, parameters) {
  parameters.passwordLength();
  var pw = '';


  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword(dictionary, parameters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
