// Assignment Code
var generateBtn = document.querySelector("#generate");
var userLength = "";
var userChars = [];
var allowUpper = true;
var allowLower = true;
var allowNums = true;
var allowSymbols = true;
//Object containing user parameters
var parameters = {
  //aquire password generation parameters
  passwordLength: function()  {
    userLength = prompt("Chose a password length between 8 and 128 characters");

    console.log(`Chosen length :: ${userLength}`);

    //Check for vaild input length
    if(userLength < 8 || userLength > 128){
      do {
        alert(`Invalid choice!`);

        userLength = prompt("Chose a password length between 8 and 128 characters");

      } while(userLength < 8 || userLength > 128);
    }
    parseInt(userLength);
  },
  chooseDictionary: function() {
    do {
      allowUpper = confirm("Your password will contain upper case letters.");
      allowLower = confirm("Your password will contain lower case letters.");
      allowNums = confirm("Your password will contian numbers.");
      allowSymbols = confirm("Your password will contain symbols.");

    } while (!allowLower && !allowNums && !allowSymbols && !allowUpper);
    
    console.log(`Allow upper case -- ${allowUpper} 
              \n Allow lower case -- ${allowLower}
              \n Allow numbers -- ${allowNums}
              \n Allow symbols -- ${allowSymbols}`);
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
  var pw = [];
  parameters.passwordLength();
  parameters.chooseDictionary();
  console.log(`This is the user length inside the generate fucntion -- ${userLength}`);
  if(!allowLower) {
    delete dictionary.randLower;
  }
  if(!allowNums) {
    delete dictionary.randNum;
  }
  if(!allowUpper) {
    delete dictionary.randUpper;
  }
  if(!allowSymbols) {
    delete dictionary.randSymbol;
  }
  for(let i = 0; i < userLength; i++) {
    var randGenArr = Object.keys(dictionary);
    var dictIndex = Math.floor(Math.random() * randGenArr.length);
    var randKey = randGenArr[dictIndex];
    var randValue = dictionary[randKey];
    pw.push(randValue.call());
  }
  var pwStr = String(pw);
  console.log(typeof(pwStr));
  pwStr = pwStr.replace(/,/g, '');
  return pwStr;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(dictionary, parameters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
