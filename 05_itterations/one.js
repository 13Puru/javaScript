// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is good");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Multiplication table for: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);            
    }
    
}



const myArray = ["batman", "superman", "flash",  "wonderwomen"]
for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    // console.log(element); 
}


// Break and continue

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        // console.log("5 detected");
        break;
    }
    // console.log(`value of i is: ${index}`);
     
}


for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log("5 detected");
        continue //will skip condition once and continues.
    }
    console.log(`value of i is: ${index}`);
}