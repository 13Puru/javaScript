// ways to declare objects
//1
const tinderUser = new Object()
tinderUser.id = "123"
tinderUser.name = "Purab"
tinderUser.isLoggedIn = false
//2
const tinderUsers = {}

// console.log(tinderUser);
// console.log(tinderUsers);

const regularUser = {
    email: "some@gg.com",
    fullname: {
        userfullname: {
            firstname: "Purab",
            lastname: "Das"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 ={
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = {obj1, obj2} // not a good way to merge
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} //most prefered way
// console.log(obj3);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


