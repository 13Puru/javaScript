const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["Batman", "Superman", "Aquaman"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros); // procedure 1 to merge
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros] // procedure 2 to merge but here we can maege more things
// console.log(allNewHeros);


const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11],12],13]

const mergedArr = anotherArray.flat(Infinity) // infinity to consider the depth fo the arrays combined together as infinite
console.log(mergedArr);
/////////////////////////////
let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3));
////////////////////////////

