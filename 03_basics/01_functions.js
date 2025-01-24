function say(){
    console.log("Hey Purab are you okay ?");
}

// say()

// function add(num1, num2){
//     console.log(num1 + num2);
// }

function add(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = add(1,3)
// console.log("Result: ", result);

function loginUserMessage(username){
    //if(!username){}
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Purab"))
console.log(loginUserMessage()) 
