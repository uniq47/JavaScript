//glaobal scope
//function scope
//block scope
//

//  const fName= "unique";

// //function scope
// function calcAge(birthYear) // bornYear is a parameter
// {
    
//     const age= 40;
    
//   //("", 0, false, undefined, null NaN )is false value and " " is true value;

//     if(birthYear>1980)
//     {
//         const add = function(a,b){
//             console.log(a+b);
//         };
//         // function add(a,b)
//         // {
//         //     console.log(a+b);
            
//         // }
    
// } 
//           add(2,4)
// }
// //calling a funcion, running a function, invoking a function

// calcAge(1990);
// //1990 is an argument


// // it has hoisting because of function declaration
// addDeclearation(10,20);
// //function declaration
// function addDeclearation(a,b){
// console.log(a+b);
// }


// //function expression

// const addExp=function(a,b){
//     console.log(a+b);
// };
// addExp(10,20);


// //arrow function

// const addArr=(a,b) => {
//     console.log(a+b);
// };
// addArr(10,20);

//const cant have double name but var can 

const firstname = "Alex";
function calcAge(birthYear)
{
    const firstname="uniq";
    console.log(firstname);
}

calcAge(1990);
console.log(firstname);