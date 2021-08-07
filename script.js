var passwordEl = document.querySelector("#password");
var btngenerateEl = document.querySelector("#generate");
var btncopyEl = document.querySelector("#copy");

btngenerateEl.addEventListener("click", function () {
   
    //Prompt to get desired character length
    var charLength = prompt("How many characters would you like your new password to be? Pick a number between 8 and 128.");

    if ((charLength >= 8) && (charLength <= 128)) {

        let symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
        let numbers = "0123456789";
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


        let newPassword = "";

})
