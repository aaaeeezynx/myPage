let num1 = document.getElementById("num1");
let answer = document.getElementById("answer");
let remind = document.getElementById("remind");
let tittle = document.getElementById("tittle");
let num2 = document.getElementById("num2");
let z = 5;

tittle.innerText = "Guess A Number";
num2.innerText = "1-100";

let y = Math.floor(Math.random() * 100 + 1);

answer.addEventListener("click", () => {
  let x = parseInt(num1.value);
  console.log(y);
  z--;

  tittle.innerText = "You have " + z + " choice";
  
  if (z < 1) {
    document.getElementById("answer").disable = true;
    num1.disable = true;
    tittle.innerText = "You lose";
  }
  if (x > y) {
    console.log("too large");
    remind.innerText = "too large";
  } else if (x < y) {
    console.log("too little");
    remind.innerText = "too little";
  } else {
    console.log("perfect");
    tittle.innerText = "perfect";
    num2.innerText = y;
    remind.innerText = "";
  }
});
