'use strict';

const url="https://api.github.com/users/";
const usernameInput = "uniq47";


const fetchProfile= async () => {
    try{//if want to install js insdie your string tben use ``
        const res = await fetch(`${url}${usernameInput}`);
        const data = await res.json();
       }catch(error){
        console.log("error occured")
        }
};
fetchProfile();


const fetchRepos = async () => {
    try{//get the repos of the user 
        const res = await fetch(`${url}${usernameInput}/repos`);
        //get the data in json format from the response object and store it in data variable
        const data = await res.json();
        console.log(data);  
    }catch(error){
        console.log(error)
    }
}

fetchRepos();



