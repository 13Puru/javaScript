let a = 300
if(true){
    let a = 30
    // console.log("inner: i.e. block scope: ", a); // inner value must not affect the global value so use let.
}
// console.log("outer: i.e global scope: ", a);


// Nested
function one(){
    const username = "puru13"
    function two(){
        const web = "fb.com"
        console.log(username);
    }
    // console.log(web);
    // two()
}
// one()

if (true) {
    const user = "Purab"
    if (user === "Purab") {
        const website = " Github"
        // console.log(user + website);
    }
    // console.log(website);
}
// console.log(user);


// +++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

//hoisting concept
console.log(addOne(5));  // function with below syntax can be hoisted before the actual lines of code.

function addOne(num){
    return num + 1
}

// ++++++++++++++++++++++++ concept 2 +++++++++++++++++++++++++++++
console.log(addTwo(5)); // function with syntax below cant be hoisted before the actual lines of code.

const addTwo = function(num){
    return num + 2
}
 