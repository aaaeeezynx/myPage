// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// for (let i = 10; i> 0; i--) {
//   console.log(i);
// }

// let arr = [1, 3, 5, 7, 9];
// // arr.forEach(item => {
// //     console.log(item);
// // });
// // // forEach對陣列進行便歷,讀出每個元素

// // arr.forEach((item, index) => {
// //     console.log(index);
// // });
// // //forEach index讀出陣列資列位置

// // let i = 10;
// // while (i > 0) {
// //   console.log(i);
// //   i--
// // }

// // for(;;){
// // }
// // //無窮迴圈

// // let arr2 = arr.reduce((x, y) => {
// //   return x + y;
// // });
// // console.log(arr2);

// // for (let i = 0; i < arr.length; i++) {
// //   sum += arr[i];
// // }
// // console.log(sum);

// let filtrArr = arr.filter((i) => {
//   return i > 6;
// });
// console.log(filtrArr);
// 篩選出大於6的數字(改面陣列長度)

// let mapr = arr.map((i) => {
//   return i + "a";
// });
// console.log(mapr);
// // 在陣列中沒個元素中＋a(不改面陣列長度)

// let strArr = ["allen", "will", "max", "tony", "jack"];
// console.log(strArr.reverse());

// strArr.splice(strArr.length, strArr.length - 1);
// console.log(strArr);

// let newArr = [];
// for (let i = strArr.length - 1; i >= 0; i--) {
//   newArr.push(strArr[i]);
// }
// console.log(newArr);

// let newArr1 = [];
// let newArr2 = [];
// for (let i = 0; i <= 100; i++) {
//   if (i / 2 == 0) {
//     newArr1.push(i);
//   } else i / 2 !== 0;
//   {
//     newArr2.push(i);
//   }
//   console.log(newArr1);
//   console.log(newArr2);

// }

let arr=[]
for(i=0;i<=100;i++){
    arr.push(i)
}
console.log(arr);

let filtr1=arr.filter((y)=>{
    return y%2===1
})
console.log(filtr1);

let filtr2=arr.filter((y)=>{
    return y%2===0
})
console.log(filtr2);