import ReactDOM from "react";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNumber = numbers.map(function (x) {
//     return x * 2
// })

// console.log(newNumber)

//Filter - Create a new array by keeping the items that return true.

// const newNumber =  numbers.filter(function(num) {
//     return num > 10 
// })

// console.log(newNumber)

//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumber = numbers.reduce(function (accumulate, currentNumber) {
//     return accumulate + currentNumber
// })

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//     return num > 10
// });

// console.log(newNumber)

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//     return num > 10
// });

// console.log(newNumber)

import emojipedia from "./emojipedia";

const textChack = emojipedia.map(function (entry) {
    return (entry.meaning.substring(0, 100));
})

console.log(textChack);