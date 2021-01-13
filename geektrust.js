// import { crack, keyFinder, check } from './resolver.js' 
const { crack, check, emblemFinder } = require('./utils/index.js')
// import { readFileSync } from "fs";
const fs = require("fs") 
const filename = process.argv[2];
var array  = fs.readFileSync(filename, "utf-8").toString().split("\n");
// let x = ["AIR OWLAOWLBOWLC", "LAND FDIXXSOKKOFBBMU", "ICE MOMA MVT MTMHTM", "WATER SUMMER IS COMING", "FIRE AJXGAMUTA"];
// let y = ['SPACE'];

let x = array;
let y = ['SPACE'];

for (let i = 0;i < x.length; i++){
    let index = x[i].indexOf(' ');
    let arr = [];
    arr.push(x[i].slice(0, index).trim());
    arr.push(x[i].slice(index + 1, x[i].length).trim());
    // console.log(arr);
    
    let key = emblemFinder(arr[0]).length;
    let decryptedCode = crack(arr[1].trim(), key);
    // console.log(decryptedCode);
    let c = check(decryptedCode, arr[0]);
    if(c){
        y.push(arr[0]);
    }
}

if(y.length >= 3){
    console.log(y);
}
else{
    console.log("NONE");
}


