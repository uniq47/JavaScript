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

const arr=[10,20,30,40]


// for each will return undefined as it is not returning anything. we do internal thing for array,ex push 
const resultForEach= arr.forEach( (el,i,array)=> {
    //     console.log(i)
    //     console.log(el)
    //     console.log(array)
      //  return el*2;
     })
    
    console.log(resultForEach);

const resut = arr.map((el,i,array) => { //map method is excpein tg each and every iteration or getting elements .
    //map gets elemnts automatically, it gets elemnts 
//    console.log(el);
//     console.log(i)
    
//     console.log(array)
    return el*2; // always returns array of same lenght
});
console.log(resut);

//console.log(newArr);


// in filter we use condition to filter out the elements 
const filterOutput= arr.filter( (el,i,array)=> {
//     console.log(i)
//     console.log(el)
//     console.log(array)
    return el>20;
 })

console.log(filterOutput); // this function is not returning any thing 




const reduceOutput= arr.reduce( (acc,currentValue)=> {
    console.log(acc)
    //console.log(currentValue);
    return acc+ currentValue;
}, 0 )// we add two arugment inside reduce method  retuns only one value
    
    
    console.log(reduceOutput);
