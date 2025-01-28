// for of

const myArray = [10, 20, 30, 40, 50]
for (const array of myArray) {
    // console.log(`values are: ${array}`);
}

const greetings = "   Hello dear Mr.Purab "

for (const greet of greetings.trim()) {
    // console.log(`characters are: ${greet}`);
}

//Maps
// Maps are better than objects in case of they dont allow duplicate data
// And maps are itteratable objects are not 
const map = new Map()
map.set('IN', "india")
map.set('US', "United States of America")
map.set('Ca', "Canada")

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

