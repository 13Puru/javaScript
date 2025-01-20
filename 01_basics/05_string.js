const name ="purab"
const repoCount = 8

// console.log(name + repoCount + " value");

console.log(`My name is ${name} and my total number of repo is ${repoCount}`);

const gameName = new String('Purab')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newName = "      Pururaj    "
console.log(newName);
console.log(newName.trim());

const url = "https://www.google.com/purab%20das"
console.log(url.replace('%20', '-'));
console.log(url.includes('purab'));
console.log(url.includes('pururaj'));












