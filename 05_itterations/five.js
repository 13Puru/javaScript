const coding = ['js', 'ruby', 'java', 'cpp']

// coding.forEach(function(item){
//     // console.log(item); // normal function   
// })

// coding.forEach((value)=>{
//     // console.log(value); // arrow functions
// })

// function name(value){
//     console.log(value);
// }

// coding.forEach(name)

//++++++++++++ Interesting ++++++++++++++++

const myCoding = [
    {
        language: "Python",
        extension: "py"
    },
    {
        language: "Ruby",
        extension: "rb"
    },
    {
        language: "JavaScript",
        extension: "js"
    }
]

myCoding.forEach((item)=>{
    console.log(`language,${item.language} has extension ${item.extension}`);
})
