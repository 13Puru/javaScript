// assuiming something to be true and false is truthy and falsy value
// const userEmail = "" // if empty it considers false
// const userEmail = "abc" // since value exist 'abc' it considers true
const userEmail = []
if (userEmail) {
    console.log(`Got the user email`);
    
}else{
    console.log(`didnt got the user email`);
    
}

if (userEmail.length === 0) {
    console.log(`user email is empty`);
    
}
// falsy values:
// flase, 0, -0, BigInt 0n, '', null, undefined, NaN

//Other are truthy values
// true, "0", 'false', " ", [], {}, function(){}, 


// check if object is empty

const myObj = {}

if (Object.keys(myObj).length === 0) { // here when we pass our objcet myObj in keys we get an array, and by adding a .length we calculate the length of the array
    console.log("object is empty");
    
}


// Nullish Coalescing operator (??): null undefined
let val;
// val = 10 ?? 15
// val = null ?? 15
val = undefined ?? 10
console.log(val);


// ternary operator

// condition ?? true : false

const value = 100
value >= 80 ? console.log(">80") : console.log("<80")