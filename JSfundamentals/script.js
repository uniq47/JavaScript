// 'use strict';

// //constructor function
// // make schema from where we make multiple objects
// // when we make a constructor function we create it with a capital leter
// //if we write this keyword inside the object , it will 
// //point to the object that is created from this constructor function
// //this keyword is a special keyword that is created for every execution context
// // or this.a=firstName; or this.firstName=firstName;//fiorsti s the properties of the object
// // parameter is firstName

// const Person = function (firstName){ 
//      this.first = firstName;
// //this.calcAge = function(birthYear){
// //     return 2022 - birthYear;
// // }
// };

// //how to create a object , we created a object from the constructor function Person
// const uniqObj =new Person ('unique') //argument is uniqe


// // console.log(Person.prototype);/
// // creating a prototype method
// Person.prototype.calcAge=function(birthYear){
//         return 2022 - birthYear;
// }
// // all the obj will have same method if created onece 
// console.log(Person.prototype);
// // we can add a property to the prototype
// console.log(uniqObj.calcAge(1999));
// console.log(uniqObj);

// const aayamObj = new Person('aayam');
// console.log(aayamObj)


//ES6 classes

'use strict';

class Person{
    constructor(firstName,birthYear)
{
    this.first=firstName;
    this.birthDate=birthYear;
}
calcAge(){
    return 2022 - this.birthDate;   
}
add(a,b){
    return a+b;
}
}
 
const objUniq= new Person('aayam',1990);


console.log(objUniq.calcAge());

//24 left
class Animal{
    constructor(legs){
        this.legs=legs;
        this.wings= winfs
    }
    walk(){
        console.log(`walking on ${this.legs} legs`);
    }
}

class Bird extends Animal{
    constructor(legs){
        super(legs);
    }
    fly(){
        console.log('flying');
    }  
}

let bird = new Bird(2);
console.log(bird);

bird.walk();
bird.fly();