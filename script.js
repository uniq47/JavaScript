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

// //fetched the result form url
// const response = fetch(url)
// .then((res) => res.json())//one is for fetch(url) 
// .then((data)=>console.log(data))//and other is for response.json()
// .catch((error)=>console.log(error));

// const fetchProfile = async () => {
//     const res = await fetch(url);
//     const data = await res.json();
//         console.log(data);

// }
// using immediately invoked function expression 
(async () => {
    
    try{
        const res = await fetch(url);
        const data = await res.json();
    }catch(error){
        console.log("error occured")
    }

        console.log(data)})();

const fetchProfile= async () => {
    
            try{
                const res = await fetch(url);
                const data = await res.json();
            }catch(error){
                console.log("error occured")
            }
        }

        fetchProfile();

// cant do catch in async function

//we can use try catch block in async function


//.catch(() => console.log("promise is rejected"));


