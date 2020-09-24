// Assignment Code
var generateBtn = document.querySelector("#generate");

//Object containing user parameters

var parameters = {
  //aquire password generation parameters
  passwordLength: function()  {
    var length = prompt("Chose a password length between 8 and 128 characters");

    console.log(`Chosen length :: ${length}`);

    //Check for vaild input length
    if(length < 8 || length > 128){
      do {
        alert(`Invalid choice!`);

        length = prompt("Chose a password length between 8 and 128 characters");

      } while((length < 8 || length > 128));
    }
  },

  chooseDictionary: function() {
    do {
      var allowUpper = confirm("Your password will contain upper case letters.");
      var allowLower = confirm("Your password will contain lower case letters.");
      var allowNums = confirm("Your password will numbers.");
      var allowSymbols = confirm("Your password will symbols.");
      
    }while(!allowLower && !allowNums && !allowSymbols && !allowUpper);

  }
  

};


//Object contaning functions that generate random characters

var dictionary = {
  randUpper: function() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
  },
  randLower: function() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
  },
  randNum: function() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
  },
  randSymbol: function() {
    var symbol = "!@#$%^&*()_+{}[]<>?;:~`"
    return symbol[Math.floor(Math.random()*symbol.length)];
  }
};


// Generate password
function generatePassword(dictionary, parameters) {
  parameters.passwordLength();
  
  parameters.chooseDictionary();
  
  var pw = '';


  return pw;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword(dictionary, parameters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
