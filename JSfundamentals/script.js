 'use strict';
//synchronous function
 //asrychronous function
console.log("Running before the function");

async function add(){
    await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("running Inside function first");
    console.log("running Inside function second");
}

console.log("Running after the function");

add();

console.log("Running after the function");

for(let i =0; i<10000; i++){
    console.log("Runinng");
}