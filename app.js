
// Refactor it to use the rest operator & an arrow function:
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   

// solution
const filterOutOdds =//define the funciton
(...nums) // using the rest operator to turn the arguments into an array
=> nums.filter//using the filter method on the nums array we created to filter certain condictions 
(num => num % 2 === 0)//writing the criteria that we want to filter out and returning the results 

//findMin
function findMin (...args) {//defining function and using the rest rest operator to collect the arguments added in 
    console.log(Math.min(...args));//using the Math.min built in funciton to iterate through the arguments array made by using the rest operator 
}

//mergeObjects
function mergeObjects (obj1, obj2) {//defining the function and the arguments that are accepted 
    return {...obj1, ...obj2};//using the spread operator to spread the properties of the object arguments into a new object 
}

// doubleAndReturnArgs
function doubleAndReturnArgs(arr, ...args) {//defining the function, accepts an array as an argument and rest parameter that captures the rest of the arguments fed into the function
        const doubledArgs = args.map(arg => arg * 2);//uses tha map method on the args array to apply logic to each element of args, then takes an arg element and doubles it (multiples by 2) - stored in a variable
        return arr.concat(doubledArgs)//returning the original array argument initially entered contatenated with the new doubledArgs to give the desired output 
};

// Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const randomIndex = Math.floor(Math.random() * items.length);//generates a random index between 0 items.length - 1
    return [...items.slice(0, randomIndex),//takes all items from the beginning of the array up to (not including) the random index
    ...items.slice(randomIndex + 1)]; //takes all itmes from the position after the random index to the end of the array
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {//defining the function with an arrow, initiating the logic 
    let newObj = { ...obj }//this creates a new object that is a copy of the object argument using spread operator to copy all properties
    newObj[key] = val;//this adds the new key value pair to the newObj variable 
    return newObj;//returning the new oibject with the added key value pair
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = { ...obj }//creating new object using spread of the object argument 
    delete newObj[key]//deleting the key in the newObj created
    return newObj;//returning the newObj with the deleted key 
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };//uisng spread to copy objects 1 and 2 and combining them into a new object 
  }

  /** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = { ...obj }//creating copy of obj
    newObj[key] = val;//adding a key with the value from the argument in the newObj
    return newObj;//returning newObj
};