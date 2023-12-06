// let arr = [
//   1,
//   "a",
//   true,
//   null,
//   undefined,
//   "",
//   { name: "doge", type: "dog" }[
//     (1, 3, 5, [2, 4, [1, 1, 2, [1, 2, 3, 5, 7, 11, 13], 3, 5], 6])
//   ],
// ];
// console.log(arr);
// console.log(arr[6],type[0]);

// let str = "doge to the moon";
// let doge = str.split(" ");
// console.log(doge);

// doge.push("doge"); //從最後添加資料
// console.log(doge);
// doge.pop(); //刪除最後一個資料
// console.log(doge.pop()); //顯示刪除的資料

// doge.unshift("Hot"); //從最前添加資料
// console.log(doge);
// doge.shift("Hot"); //刪除最前一個資料
// console.log(doge);

let str2 = "doge to the moon";
let doge2 = str2.split(" ");
console.log(doge2);
doge2.splice(1, 2, "ARE");
console.log(doge2);
//找到位置[1]刪除[1][2]兩比資料並新增一筆ARE

doge2.splice(1, 1);
console.log(doge2);
//找到陣列位置[1]刪除

doge2.splice(1, 0, "aaaa");
console.log(doge2);
//找到陣列[1]位置並添加aaaa

console.log(doge2.includes("doge"));
//判斷陣列是否包含條件字串

console.log(doge2.jion("."));
//陣列組成字串(組成間隔插入字符)