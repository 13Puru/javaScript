// // if

// if(/*check if condtion true*/ true){

// }
// if(/*check if condtion false*/ false){

// }


// const score = 44

// if (score <= 100 && score > 70) {
//     let power = "can fly"
//     console.log(`Power is: ${power}`);
// }else if(score <= 70 && score >= 50){
//     let power = "can swim"
//     console.log(`power is: ${power}`);
// }else{
//     console.log(`power is: can walk`);
// }

const user = {
    name: "Purab",
    loggedInGoogle: false,
    userLoggedIn: true,
    loggedInEmail: true,
    debitcard:true
}

if (user.userLoggedIn && user.debitcard) {
    console.log(`${user.name}, logged in`);
}

if (user.loggedInEmail || user.loggedInGoogle) {
    console.log(`${user.name}, logged in`);
}