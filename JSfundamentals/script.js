// const arr=[1,2,3,4]


// //fucntion inside of the function




// const result = arr.forEach((el)=> { // we  created a function inside of the function wl ia  FUCNTOIN WE CREATED WHIHC ARROW FUNCTION
// console.log(el);
// return "hello";
// });
// console.log(result);

// const result1 = arr.map((el)=> 20) //dont have to write return as it will automaticall return 20, we use curly brace when there is multiple line s
//     console.log(result1);
    

// const  add = () => 10 // with array function we can remove the array {}

// if we want to return we use map method 

const arr=[1,2,3,4]
const newArr=[];
console.log(newArr);

const resut = arr.forEach((el) => {
    newArr.push(el)
});

console.log(newArr);