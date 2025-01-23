//arrays

const arr =[0,1,2,3,4,5,6]

const myArr = ["Batman", "superman"]

const arr2 = new Array(1,2,3,4)
// console.log(arr[1]);

// Array methods

myArr.push("Ironman");
myArr.pop();

// console.log(myArr);

const newArr = myArr.join() //join binds the elements and converts to string
// console.log(myArr);
// console.log(newArr);

// slice, splice
// splice manippulates original array
// slice doesnt

const myn = arr.slice(1,3)
console.log("A ", arr);
console.log(myn);

const myn1 = arr.splice(1,3)
console.log("B ", arr);//original array gets manipulated after using splice.
console.log(myn1);



