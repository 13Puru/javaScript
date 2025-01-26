// Immediately Invoked Function Expression (IIFE)

(function puru(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon ';' necessary for iife


( (name) => {
    //Un-named IIFE
    console.log(`${name}, DB IS CONNECTED`);
})("PURAB");