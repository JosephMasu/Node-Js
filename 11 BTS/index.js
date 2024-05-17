import fs from 'fs';

// blocking code

// console.log('start');
// alert("block");
// console.log('End');


// non Blocking code

//console.log('start');
// setTimeout(() =>{
//     alert("Non-Blocking")
// }, 1000);
// console.log("End");

//without call back 
// console.log("Start");

// let data = fs.readFileSync("test.txt");
// console.log(data.toString());

// console.log("Ended ");

//using callback function

console.log("Start");

fs.readFile("test.txt", 'utf-8',(err, res) =>{
err ? console.log(err) : console.log(res);
});
console.log("Ended ");