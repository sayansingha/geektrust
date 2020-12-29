import { crack, keyFinder } from './resolver.js'
let x = "AIR ROZO";
let arr = x.split(' ');
let key = keyFinder(arr[0]);
console.log(key);
let bool = crack(arr[1], key);
console.log(bool);
