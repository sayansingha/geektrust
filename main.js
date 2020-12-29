import { crack, keyFinder, check } from './resolver.js'
let x = "AIR ROZO";
let arr = x.split(' ');
let key = keyFinder(arr[0]);
// console.log(key);
let decryptedCode = crack(arr[1], key);
// console.log(decryptedCode);
let c = check(decryptedCode, arr[0]);
if(c){
    console.log("correct");
}

