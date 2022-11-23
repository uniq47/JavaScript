'use strict';

//constructor function
// make schema from where we make multiple objects
// when we make a constructor function we create it with a capital leter
const Person = function (firstName){ // parameter is firstName
    this.first = firstName;// or this.a=firstName; or this.firstName=firstName;//fiorsti s the properties of the object
//if we write this keyword inside the object , it will 
};

//how to create a object , we created a object from the constructor function Person
const uniqObj =new Person ('unique') //argument is uniqe
console.log(uniqObj);

const newObj =new Person ('aayam') //argument is new
console.log(uniqObj);





//static constructor function passing uniq in this  and not the parameter
// const Person1 = function (){
//     this.firstName= "uniq";
// };

// console.log(Person1);