


const arr=[1,2,3,40, [1,2]];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// const e = arr[4];


// const a = 1;
// const b = 2;
// const c= 3;
//destructuring array

//const[a,b,c,d,e]=arr;

//console.log(a,b,c,d,e)

//SPREAD OPPERATOR =... (three dots) , removing the array syntax and extracting the values

//const arr=[1,2,3,40, [1,2]];
//const number = 1,2,3,4 // we cant do this so we need to add brackets just like in arr const all Element = [..arr]
// const allElemnt = [...arr];
// console.log(allElemnt);

const arrOne=[1,2,3,4,]
const arrTwo=[5,6,7,8]

//const arrThree=[arrOne.concat(arrTwo)];
//spread operator
console.log([...arrOne, ...arrTwo]); 

//array descturing 
//firt element of the array is storing in first andrest is stored in the variable two

//rest operator is addin array and spread operator is removing array
const [first,...two1]= arrOne;// here it is called rest parameter or rest operator ...two gets rest of the array element 
console.log(two1);

//rest operator is addin array and spread operator is removing array
// syntax is used with destructing then its rest 
const [...two]= arrOne;// here it is called rest parameter or rest operator ...two gets rest of the array element 
//if used with function parameter then its spread operator 
console.log(...two);


// will oney get
function displayArray(...a){ //rest operator //..a will have array of all the element as a parameter  so we wuse spread operator to get all the element
    console.log(...a); //spread operator
}

displayArray(1,2,3,4,5);




 





// //object distructuring structure
// //order done matter
// //rename age to myAge 
// const{age:myAge,
//     favNumber
//     ,freeHours: {hourOne,allhours}
// } =obj;

// // console.log(myAge);
// // console.log(favNumber);
// console.log(allhours[1]);






// //const hourOne = obj.freeHours.hourOne;
// console.log(hourOne);


//array structure
// const arr=[1,2,[20,30],4];
// //const thirdElement = arr[2]
// //console.log(thirdElement)


// const [,,[ ,thirdElement]]=arr;
// console.log(thirdElement);



//  const arr=[1,2,3];
// const third=arr[2];
// console.log(thirdElement);


// const fourthElement=arr[3];
// console.log(fourthElement);


//destructuring notation
// const [,,c=0]=arr;

// console.log(c);





//console.log(obj.calcAge());

// const display= function (number){
//     if (number>15)
//     {
//         return "greater than 15";
//     }
//     return "less than 15";
// };
// console.log(display(20));










