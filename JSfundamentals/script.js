 'use strict';

 //set and map methods
// main aim of set method is to remove duplicate values from array
 const numberSet = new Set([1,2,3,4,5]);
 console.log(numberSet);
 console.log(numberSet.has(3));
 console.log(numberSet.add(6));
 console.log(numberSet.delete(3));
 console.log(numberSet);

 numberSet.clear();

 console.log(numberSet);

 //numberSet.map

 const menuItems= new Set(["pizza","burger", "momo"])

 console.log(menuItems);

 for(const item of menuItems){
     console.log(item);
 }
// converting set to array
 //console.log(...mainMenu);

 // putting array in the backets of set
    const mainMenu = new Set([...menuItems]);

    // so we can use set methods to delete dupliate elements then we can convert it to set and then to array


