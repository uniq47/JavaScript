'use strict';


console.log(document);
/// for id we use # and for class we use .
const inputBox = document.querySelector("#search-username");
const searchBtn= document.querySelector("#search-usernameBtn")
const userInfo= document.querySelector('#intro');
const loading= document.querySelector('#loading');
const reposSection= document.querySelector('.repos');
const repoList= document.querySelector(".repos-list");
const fileInput= document.querySelector('.filter-repos');


const url="https://api.github.com/users/";
const usernameInput = "uniq47";

//<section class="intro" id="intro">
const displayProfile = (profile) => {
   return `<div class="user-info" id="user-info">
          <figure>
            <img
              alt="user avatar"
              src=${profile.avatar_url}
            />
          </figure>
          <div>
            <h2>
              <a href=${profile.html_url}><strong>${profile.name}</strong></a
              >&nbsp;<strong class="username">${profile.username}</strong>
            </h2>

            <p>${profile.bio}.</p>
            <p><strong class="blue">Location: </strong>${profile.location}</p>
            <p>
              <strong class="blue">Repos </strong>1
              <strong class="blue">Followers: </strong>${followers}
              <strong class="blue">Following: </strong>${following}
            </p>
          </div>
        </div>
      </section>`
}

const fetchProfile= async() => {
    try{//if want to install js insdie your string tben use ``
        const res = await fetch(`${url}${usernameInput}`);
        const data = await res.json();
        console.log(data);
        userInfo.innerHTML=displayProfile(data);
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
        //console.log(data);  
    }catch(error){
        console.log(error)
    }
}

fetchRepos();



