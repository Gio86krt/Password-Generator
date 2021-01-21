// Assignment Code
var generateBtn = document.querySelector("#generate");

let numOfChars, wantLowCase, wantUpCase, wantNums;
let arrInputs = [];

const charsAll = [
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"],
];
/////clears the textarea------NOT WORKING
const clearFields = function () {
  document.querySelector("#password").innerText = "";
  arrInputs.length = 0;
};
///get inputs from the user
const getInputs = function () {
  clearFields();
  //takes the string from the user, converts to number and checks if it's positive
  numOfChars = Number(prompt("How many characters?"));
  if (numOfChars <= 0) {
    alert("Please insert a positive value");
    getInputs();
  }
  //takes booleans values and pushes into an array
  wantLowCase = confirm("Do you want to use low case?");
  wantUpCase = confirm("Do you want to use upper case?");
  wantNums = confirm("Do you want to use numbers?");
  wantSpecials = confirm("Do you want to use special characters?");
  arrInputs.push(wantLowCase, wantUpCase, wantNums, wantSpecials);
  // console.log(arrInputs);
  //checks that at least one of the values is true
  if (!wantLowCase && !wantUpCase && !wantNums && !wantSpecials) {
    alert("You can't make a password without characters!");
    getInputs();
  } else writePassword();
};

// Write password to the #password input
function writePassword() {
  let password = "";
  // console.log(numOfChars);
  do {
    //randomly generates a number to pick the inner array
    let random1 = Math.floor(Math.random() * arrInputs.length);
    // console.log(random1, x);
    if (arrInputs[random1]) {
      //randomly generates a number within the inner array
      let random2 = Math.floor(Math.random() * charsAll[random1].length);
      password += charsAll[random1][random2];
      //if is one of the false indexes continue,
    } else continue;
  } while (password.length < numOfChars);

  document.querySelector("#password").innerText = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getInputs);
