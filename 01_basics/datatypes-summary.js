// primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1324343554656478n



// Refernece type (Non - primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "purab",
    age: 23,
}

const myfunction= function(){
    console.log("Hello world");
    
}

console.log(typeof bigNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memeory, heap Memeory

// Stack(Primitive), Heap (Non-Primitive)

  let myName = "Purab"
  let anotherName = myName
  anotherName = "Srijani"

  console.log(myName);
  console.log(anotherName);


//

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "purab@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


  
  

