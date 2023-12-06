setTimeout(() => {
  $(".loader").hide();
  // $("body");
}, 3000);

let yrNum = document.getElementById("yrNum");
let btn = document.getElementById("btn");
let total1 = document.getElementById("total1");
let ansNum = document.getElementById("anaNum1");
let arr = [];
let prime;

btn.addEventListener("click", () => {
  let x = parseInt(yrNum.value);

  for (let i = 2; i < x; i++) {
    prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(i);
      arr.push(" " + i);
    }
  }
  ansNum1.innerText = arr;
  total1.innerText = x + "以內的質數有" + arr.length + "個：";
});
