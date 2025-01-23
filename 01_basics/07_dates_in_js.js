//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //only day and date
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());// m/dd/yyyy format
// console.log(myDate.toLocaleString());// m/dd/yyyy with time

let createDate = new Date(2023, 0, 23) // month start with 0 in js
// console.log(createDate.toDateString());

let newDate = new Date(2023, 0, 23, 5, 3) // month start with 0 in js with time 5, 3
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));//convert to seconds

let theDate = new Date()
// console.log(theDate.getDate());
// console.log(theDate.getMonth() + 1);
// console.log(theDate.getFullYear());
// console.log(theDate.getDay());
theDate.toLocaleString('default',{
    weekday: "long",
    dateStyle: "full"
})









