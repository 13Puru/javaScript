let a = 300
if(true){
    let a = 30
    console.log("inner: i.e. block scope: ", a); // inner value must not affect the global value so use let.
}
console.log("outer: i.e global scope: ", a);
