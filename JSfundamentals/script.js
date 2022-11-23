"use strict";

// to create a schema or blueprint for our data
//consctructor function


 // this keyword-> // this keyword points to the object that is calling the method

 console.log(this)
 // points to the gobal object comming from the web api, pointing to the golbal window object
 // dont always point to the global object

 const obj={
    name:"unique",
    age:31,
    calcAge: function(){
        console.log(this);
 },
};

obj.calcAge();


function add(){
    console.log(this);
    if(true){
        console.log(this);
    }
}
add();


if(true){
    console.log(this);
}
