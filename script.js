// Assignment Code
var generateBtn = document.querySelector("#password");

var UPPER = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Special = ["#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]"];
var Numbers = [0,1,2,3,4,5,6,7,8,9];

var UPPERValid = confirm("Would you like your password to contain uppercase letters?");
var lowerValid = confirm("Would you like your password to contain lowercase letters?");
var SpecialValid = confirm("Would you like your password to contain special character symbols?");
var NumbersValid = confirm("Would you like your password to contain numbers?");



// Write password to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


