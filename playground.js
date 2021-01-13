// import { readFileSync } from 'fs';
// var text = readFileSync('file.txt', 'utf-8');
// console.log(text);

const fs = require("fs") 
var array  = fs.readFileSync('file.txt', "utf-8").toString().split("\n");
console.log(array);
