// for in // used to itterate Objects

const myObj = {
    py: "python",
    jwt: "java web token",
    REST: "Representational State Transfer"
} 

for (const key in myObj) {
    console.log(`${key}, stands for ${myObj[key]}`);
}