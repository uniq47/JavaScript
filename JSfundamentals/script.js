//stack constains premitive values so pass by value is realted to stack 

//heap contains objects(non primitive values) sos every objects are stoped in heap 
//so pass  byu refrence is related to heap

let language = "python";
let oldLanguage = language;
language ="javaScript";

console.log(language);
console.log(oldLanguage);

const development={
    frontend:"javascript", //key(name of the properrty):value
    backend:"python"
};

console.log(development);
const newDevelopment= development;

console.log(newDevelopment);

newDevelopment.backend="nodejs";
console.log(newDevelopment);
// they are object and  linked in memory heap by refrence so if we (non primitive)
//change one of them it will change the other one, they are pointin to the same object 
//in the memory heap,if we change something in one of them it will change the other one.
console.log(development);
//console.dir(window.document.querySelector(".root").textContent="yooo");
console.dir(window.document.querySelector('.root'));


//to get the properties ->.dir

//jS is a single threaded language so it can do one
// thing at a time, js only have one locatoin to execute the code =call stack, 
//if any thing is taking to much time it will block execution of the code, blocks al lthe code , 
//not good for processing big data, so we use web workers to do the heavy lifting in the background
 

// //to add new property to object
// development.fullstack="java";
// console.log(development);

// //to delete a property from an object
// delete development.fullstack;
// console.log(development);

