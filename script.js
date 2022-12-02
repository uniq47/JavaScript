'use strict';

const url="https://api.github.com/users/uniq47";

console.log(window);

// const response = fetch(url)

// console.log(response);

// response.then(function () {
//     console.log("Promise is resolved");
// });

// response.catch(function (){
//     console.log("Promise is rejected");
// })

// const response = fetch(url)//fetched the result form url
// .then(function(){
//     console.log("promise if fullfilled")
// })
// .catch(function(){
//     console.log("promise is rejected")
// });

//fetched the result form url
const response = fetch(url)
.then((response) => response.json())//one is for fetch(url) 
.then((data)=>console.log(data))//and other is for response.json()
.catch((error)=>console.log(error));






//.catch(() => console.log("promise is rejected"));


