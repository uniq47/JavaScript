'use strict';

//dir getsthe property of the object
//console.dir(document)
//console.log(document);
/// for id we use # and for class we use .
//querySelector is used to select the element from the dom and does the job of getElementById
// like this we can select the element from the dom 
// to select it form html in javascript we use querySelector
const inputBox = document.querySelector("#search-username");
const searchBtn= document.querySelector("#search-usernameBtn")
const userInfo= document.querySelector('#intro');
//console.log(userInfo);
const loading= document.querySelector('#loading');
const reposSection= document.querySelector('.repos');
const repoList= document.querySelector(".repos-list");
const fileInput= document.querySelector('.filter-repos');

// main concept
//we need to send the html in dataPrile in the form of string back to our index.html from our JS using something like userInfo.innerHTML=displayProfile(data);, 
//where do we want to send? inside the userInfo div, userInfo means the div with id intro(elemnet that has the id intro)
//const userInfo= document.querySelector('#intro');, so where is the userInfo? in the index.html, , means we will insert something in between those two tags,
// <div id="intro"></div> using innerHTML userInfo.innerHTML=displayProfile(data);, 
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
              <strong class="blue">Repos </strong>${profile.public_repos}
              <strong class="blue">Followers: </strong>${profile.followers}
              <strong class="blue">Following: </strong>${profile.following}
            </p>
          </div>
        </div>`;      
}


// const fetchProfile = async() =>{
//   try{
//     const res = await fetch (`${url}${usernameInput}`);
//     const data = await res.json();
//     userInfo.innerHTML= displayProfile(data);
//   } catch(error){
//     console.log("error occured")
//   }
// }
 //async-> executes after sync
 //sync is line by line 
 //arrow function
 //const fetchProfile = () =>{}
const fetchProfile= async() => {
//we need input here
  //console.log(inputBox.value);
  // before we get the data we will show the
  // loading with the help of innerText
  loading.innerText="Loading...";
  try{
      const res = await fetch(`${url}${usernameInput}`);
      const data = await res.json();
      //if want to install js insdie your string tben use ``
// if bio information constains the bio information in the display and else if we dont have the bio we will not set any inner html 
      //console.log(data);  
      
      if(data){ 
       // console.log(data);   
        userInfo.innerHTML=displayProfile(data); 
          
//await has effect on promies 
        
          //data is the json object that we get from the api and we can access the properties of the object using dot notation that is data.name
          //console.log(data);
         //calling the function to displayProfile and adding the data
         //displayProfule(data);-> havent sent this back to our html 
         // using innerHTML we can send somethingfrom JS back to Html as string
         // but with in our string we have html syntax
         // we are sending our html in string from java script back to our html
        
          //console.log(userInfo);
         // else if we dont have the bio we will not set any inner html if we didnt get the nbio
        
          //making it empty 
          
          //userInfo.innerText="";
          //userSection.innerText="";
          //loader we will send css to the loader
          //loading.innerHTML=`<h1 style = "color: red"> Username Not Found! </h1>`;
     }else{
          userInfo.innterTest="";
          reposSection.innerText="";
          loading.innerHTML=`<h1 style= "color: red">Username Not Found!</h1>`;
      }
    }catch(error){
        console.log("error occured");
        // we have supplied inner text we need to remove it ;
        loading.innerText="";
      }
};
fetchProfile();


const fetchRepos = async () => {
  //innertext is used to set the text inside the element so the string that we pass will be set as the text inside the element
    
    try{//get the repos of the user 
     
        const res = await fetch(`${url}${usernameInput}/repos`);
        //get the data in json format from the response object and store it in data variable
        const data = await res.json();
      displayRepos(data);
        //console.log(data);  
    }catch(error){
        console.log(error)
    }
}

fetchRepos();

  const displayRepos = (repos) =>{
  //reposSection.classList.remove("hide") is used to remove the hide class from the reposSection with the help of classList.remove("hide")
  reposSection.classList.remove("hide");
  //fileInput.classList.remove("hide") is used to remove the hide class from the fileInput
  fileInput.classList.remove("hide");
 // console.log(repos);
  for(const repo of repos){
    //document.createElement is used to create a new element in the DOM and store it in the listItems variable
   const listItems = document.createElement("li");
   console.log(listItems)
   //innerHTML is used to set the innerHTML of the element
    //listItems.innerHTML is used to set the innerHTML of the listItems 
    //so we are setting the innerHTML of the listItems to the name of the repo
    listItems.innerHTML=`<h3>${repo.name}</h3>`
   // console.log(listItems)
    //console.log(repo);
  //  console.log(listItems);
    //repoList.append(listItems);
  }
  }


const devicons = {
  Assembly: '<i class="devicon-labview-plain colored"></i> Assembly',
  "C#": '<i class="devicon-csharp-plain colored"></i> C#',
  "C++": '<i class="devicon-cplusplus-plain colored"></i> C++',
  C: '<i class="devicon-c-plain colored"></i> C',
  Clojure: '<i class="devicon-clojure-plain colored"></i> C',
  CoffeeScript:
    '<i class="devicon-coffeescript-plain colored"></i> CoffeeScript',
  Crystal: '<i class="devicon-crystal-plain colored"></i> Crystal',
  CSS: '<i class="devicon-css3-plain colored"></i> CSS',
  Dart: '<i class="devicon-dart-plain colored"></i> Dart',
  Dockerfile: '<i class="devicon-docker-plain colored"></i> Docker',
  Elixir: '<i class="devicon-elixir-plain colored"></i> Elixir',
  Elm: '<i class="devicon-elm-plain colored"></i> Elm',
  Erlang: '<i class="devicon-erlang-plain colored"></i> Erlang',
  "F#": '<i class="devicon-fsharp-plain colored"></i> F#',
  Go: '<i class="devicon-go-plain colored"></i> Go',
  Groovy: '<i class="devicon-groovy-plain colored"></i> Groovy',
  HTML: '<i class="devicon-html5-plain colored"></i> HTML',
  Haskell: '<i class="devicon-haskell-plain colored"></i> Haskell',
  Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
  JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
  Julia: '<i class="devicon-julia-plain colored"></i> Julia',
  "Jupyter Notebook": '<i class="devicon-jupyter-plain colored"></i> Jupyter',
  Kotlin:
    '<i class="devicon-kotlin-plain colored" style="color: #796bdc"></i> Kotlin',
  Latex: '<i class="devicon-latex-plain colored"></i> Latex',
  Lua: '<i class="devicon-lua-plain-wordmark colored" style="color: #0000d0"></i> Lua',
  Matlab: '<i class="devicon-matlab-plain colored"></i> Matlab',
  Nim: '<i class="devicon-nixos-plain colored" style="color: #FFC200"></i> Nim',
  Nix: '<i class="devicon-nixos-plain colored"></i> Nix',
  ObjectiveC: '<i class="devicon-objectivec-plain colored"></i> ObjectiveC',
  OCaml: '<i class="devicon-ocaml-plain colored"></i> OCaml',
  Perl: '<i class="devicon-perl-plain colored"></i> Perl',
  PHP: '<i class="devicon-php-plain colored"></i> PHP',
  PLSQL: '<i class="devicon-sqlite-plain colored"></i> PLSQL',
  Processing:
    '<i class="devicon-processing-plain colored" style="color: #0096D8"></i> Processing',
  Python:
    '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
  R: '<i class="devicon-r-plain colored"></i> R',
  Ruby: '<i class="devicon-ruby-plain colored"></i> Ruby',
  Rust: '<i class="devicon-rust-plain colored" style="color: #DEA584"></i> Rust',
  Sass: '<i class="devicon-sass-original colored"></i> Sass',
  Scala: '<i class="devicon-scala-plain colored"></i> Scala',
  Shell:
    '<i class="devicon-bash-plain colored" style="color: #89E051"></i> Shell',
  Solidity: '<i class="devicon-solidity-plain colored"></i> Solidity',
  Stylus: '<i class="devicon-stylus-plain colored"></i> Stylus',
  Svelte: '<i class="devicon-svelte-plain colored"></i> Svelte',
  Swift: '<i class="devicon-swift-plain colored"></i> Swift',
  Terraform: '<i class="devicon-terraform-plain colored"></i> Terraform',
  TypeScript: '<i class="devicon-typescript-plain colored"></i> TypeScript',
  "Vim Script": '<i class="devicon-vim-plain colored"></i> Vim Script',
  Vue: '<i class="devicon-vuejs-plain colored"></i> Vue',
  null: '<i class="devicon-markdown-original"></i> Markdown',
};
