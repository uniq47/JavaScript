
// //strict model
// "use strict";


 const obj={
    name:"unique",
    age:31,
    calcAge: function(){
        console.log(this);
 },
 favNumbers:{
    firstNumber:1,
    secondNumber:2,
 },
 totalNumber:100
};
// optional patrameter
console.log(obj.favNumbers?.firstNumber);


// //?? operator
// 0, false, null, undefined, NaN, '' are falsy values
//removing one of the falsy values 

totalNumber= false
//shoirt circuit operator
const totalProducts = totalNumber || 20;

// console.log(totalProducts);

// if(totalNumber){
//     console.log("you have total products ");}
// else{
//     console.log("you have no products");
// }

//shoirt surcuting operator
// || operator stopes at truthy value 
//&& operator stopes at falsy value  
// if cant find the truthy value it will return the last value the one on the end 
// console.log(0 && 1 && 2);


//obj.totalNumber=0
const number = obj.totalNumber ?? 2000;
console.log(number);


// let height=0;
// alert(height || 100); //100
// alert(height ?? 100); //0 so the main aim of the ?? is to make the _0_ falsy value to be truthy value
