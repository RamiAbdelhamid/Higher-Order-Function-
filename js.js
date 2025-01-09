// Q1

//forEach

// const numbers = [1, 2, 3, 4];
// numbers.forEach((num) => console.log(Math.pow(2, num)));
// console.log (numbers)

//map

// const numbers = [1, 2, 3, 4];
// const raising = numbers.map((num) => Math.pow(2,num));
// console.log(numbers);
// console.log(raising);

// for
// const numbers = [1, 2, 3, 4];
// for (i=1 ;i<=numbers.length;i++)
// {
//     console.log(Math.pow(2, i));
// }

// .....................................................................................//

// map
// const numbers = [1, 2, 3, 4];

// function double(num) {

// if (numbers % 2 === 0) {

//     return "even"
// }

// else {

//     return "odd"
// }

// }

// const squares = numbers.map(double);
// console.log(squares);

// Q2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,"gdfdgh"];
// function num (num){

// if(typeof num==="number"){

// if (num % 2 === 0) {
//    return "even"
// ;

// } else {
//     return "odd";
// }
// }
// else
// return "N/A"
// }

// let arr =numbers.map(num)

// console.log (arr)

// Q3

// const names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

// function newarr (name) {
//   collectedNames.push(name);
// }

// const collectedNames = [];
// names.forEach(newarr);

// console.log(collectedNames);

// Q4

// const numbers = [1, 2, 3, 4, 5, 15, 20];

// function fizzbuzz(arr) {
//   return arr.map((num) => {
//     if (num % 3 === 0 && num % 5 === 0) {
//       return "Fizz Buzz";
//     } else if (num % 3 === 0) {
//       return "fizz";
//     } else if (num % 5 === 0) {
//       return "Buzz";
//     } else {
//       return num;
//     }
//   });
// }

// console.log(fizzbuzz(numbers));

// 



// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.map((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log("Even Numbers:", evenNumbers);
// console.log("Odd Numbers:", oddNumbers);