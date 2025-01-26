const user = {
    username: "purab",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the repository of javascript`);
        console.log(this);  
    }
}

// user.welcomeMessage()
user.username = "srijani"
// user.welcomeMessage()


// console.log(this);


// ++++++++++Arrow function++++++++++++
// const add = () => {} // syntax of arraw function

// 

// const add = (num1, num2) => (num1 + num2) //implicit return  no need of return using this type of parenthesis

const add = (num1, num2) => ({username: "Purab"})
console.log(add(4, 5));
