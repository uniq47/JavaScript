//const 
//var 
//let  --> over write the number these are the three ways to declare a variable

let number=10;
console.log(number)
number=50;
console.log(number)

const bootcamp = "python";
console.log(typeof bootcamp);

const myCountry= "Nepal";
console.log(myCountry);

const age=45;
console.log(typeof age);

//primitive: Number, String, Boolean, Null, Undefined, Symbol
//non-primitive: Object, Array, Function-> all are objects in JS 

document.write("hello") //document.write is used to write in html file in js
console.log(document)

//const evenNumbers=[2,"hello",4,6,8,10,[1,2]];
const evenNumbers= new Array(2,"hello",4,6,8,10,[1,2]);
console.log(evenNumbers[1])

//objects in js so 
const bootcourse={
    course: 'React',
    duration: "3 months",
};

const arrayBootcamp=["React","3 months "]
console.log(bootcourse[1]);

//functions in js

function addTwoNumbers(first, second){
    return first+second;
}

const result = addTwoNumbers(1,2);
console.log(result);
