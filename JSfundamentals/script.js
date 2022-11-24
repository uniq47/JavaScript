"use strict";
//map is used to remove time conplexity of O(n^2) to O(n)
//map is used to store key value pairs
//
const resturant = new Map();
resturant.set("open", 10).set("close",22);
console.log(resturant);
console.log(resturant.get("open"));

// const mapArray = [...resturant];
// console.log(...mapArray[0]);
// we use this key value pair to check if the value is present or not
console.log(resturant.has("open"));


