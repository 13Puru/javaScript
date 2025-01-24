// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Purab",
    "full name": "Purab Das",
    [mySym]: "myKey1", 
    age: 22,
    location: "jaipur",
    email: "daspurab80@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["isLoggedIn"])

// console.log(jsUser.mySym)

// console.log(jsUser[mySym]);

//change data
jsUser.email = "13purab@gmail.com"
// Object.freeze(jsUser) // to freeze more chnages

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Welcome");
}

jsUser.greetingTwo = function(){
    console.log(`Welcome, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

