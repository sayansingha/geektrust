import { crack, keyFinder, check } from './resolver.js'
let x = ["AIR ROZO", "LAND FAIJWJSOOFAMAU", "ICE STHSTSTVSASOS"];
let y = ['SPACE'];
for (let i = 0;i < x.length; i++){
    let arr = x[i].split(' ');
    let key = keyFinder(arr[0]);
    let decryptedCode = crack(arr[1], key);
    let c = check(decryptedCode, arr[0]);
    if(c){
        y.push(arr[0]);
    }
}
// let arr = x.split(' ');
// let key = keyFinder(arr[0]);
// // console.log(key);
// let decryptedCode = crack(arr[1], key);
// // console.log(decryptedCode);
// let c = check(decryptedCode, arr[0]);
// if(c){
//     console.log("correct");
// }
console.log(y);

