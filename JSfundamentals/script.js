//for loop
//for Off
//for in 
//while loop


//for Each
//Map
//filter
//reduce

//const arr=[7,8,9,10];
//imperative
// for (let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }
//declarative code/ get the values of the array
// for(number of arr){
//     console.log(number)
// }

// for(i in arr){
//     console.log(arr[i]);
// }
//if we dont know when to end then we use while loop
// let index=0;
// while(index<8){
//     console.log("runnding ")
//     index++;
// }

// imp in react

//forEach, map, filter, reduce

// function display(abcd){
//     // console.log(a);
//     abcd(10);// calls display(function displayNumber(number){console.log(number)});
// }
//call back function
//displaying function inside the function as a paramneter is called callback function
//we can pass number array everyhting as a parameter
// display(function (number){
//     console.log(number)
// });

// function displayName(number){
//     console.log(number);
// }


//const arr=[7,8,9,10,20 ];
//console.log(arr);

// function arrayFunction(){
//     console.log("Running");

//for each will call the finction for each element in the array
// for each will accept only function
// arr.forEach(function arrayFunction(){
//          console.log("Running")});

//arr.forEach((item,index )=>console.log(index));

//arr.forEach((item)=>console.log(item));

const obj={
    name: 'unique',
    age:23,
    favNumber:[1,2,3,4],
    calcAge: function(){
        console.log('running calcAge function');// functoin insde a object is called method
        return 'your age';
    },
    freeHours:{
        hourOne:'six-seven',
        hourTwo:2100,
        allhours:[1800,1900,2100]
    }
};

//object structure
//order done matter
//rename age to myAge 
const{age:myAge,
    favNumber
    ,freeHours: {hourOne,allhours}
} =obj;

// console.log(myAge);
// console.log(favNumber);
console.log(allhours[1]);






//const hourOne = obj.freeHours.hourOne;
console.log(hourOne);

const availableHours = obj.freeHours.allhours[0];
console.log(availableHours);

//array structure
// const arr=[1,2,[20,30],4];
// //const thirdElement = arr[2]
// //console.log(thirdElement)


// const [,,[ ,thirdElement]]=arr;
// console.log(thirdElement);











//console.log(obj.calcAge());

// const display= function (number){
//     if (number>15)
//     {
//         return "greater than 15";
//     }
//     return "less than 15";
// };
// console.log(display(20));










