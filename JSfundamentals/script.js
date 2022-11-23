'use strict';

//constructor function
// make schema from where we make multiple objects
// when we make a constructor function we create it with a capital leter
//if we write this keyword inside the object , it will 
//point to the object that is created from this constructor function
//this keyword is a special keyword that is created for every execution context
// or this.a=firstName; or this.firstName=firstName;//fiorsti s the properties of the object
// parameter is firstName

const Person = function (firstName){ 
     this.first = firstName;
//this.calcAge = function(birthYear){
//     return 2022 - birthYear;
// }
};

//how to create a object , we created a object from the constructor function Person
const uniqObj =new Person ('unique') //argument is uniqe


// console.log(Person.prototype);/
// creating a prototype method
Person.prototype.calcAge=function(birthYear){
        return 2022 - birthYear;
}
// all the obj will have same method if created onece 
console.log(Person.prototype);
// we can add a property to the prototype
console.log(uniqObj.calcAge(1999));
console.log(uniqObj);

const aayamObj = new Person('aayam');
console.log(aayamObj)


