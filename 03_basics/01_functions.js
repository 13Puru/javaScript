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
// console.log(loginUserMessage()) 

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 2000, 556));

const user = {
    username: "Purab",
    price: 299
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}.`); 
}

// handleObject(user)

const myArray = [10, 20, 30 ,40 ,50]

function returnArr(getArr){
    return getArr[1]
}

console.log(returnArr(myArray));
