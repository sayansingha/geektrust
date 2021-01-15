const { emblem } = require('./magicStrings');
const kingdoms = Object.keys(emblem);
function crack(encryptedString, unshiftAmount){
    var plainText = "";
    for(var i = 0; i < encryptedString.length; i++) {
        var encryptedCharacter = encryptedString.charCodeAt(i);
        if(encryptedCharacter >= 97 && encryptedCharacter <= 122) {
            plainText += String.fromCharCode((encryptedCharacter-97 - unshiftAmount + 26) %26 + 97 );
        } else if(encryptedCharacter >= 65 && encryptedCharacter <= 90) {
            plainText += String.fromCharCode((encryptedCharacter-65 - unshiftAmount + 26) %26 + 65 );
        } else {
            plainText += String.fromCharCode(encryptedCharacter);
        }
    }
    return plainText;
}

function emblemFinder(value) {
    const emblemValue = emblem[value];
    if (emblemValue) {
        return emblemValue;
    }
    return 0;
}

function check(decryptedCode, kingdom){
    let emblem = emblemFinder(kingdom);
    // console.log(emblem);
    if(emblem){
        let arr = emblem.split('')
        decryptedCode = decryptedCode.split('');
        for(let i = 0;i < emblem.length; i++){
            let c = 0;
            for(let j = 0;j < decryptedCode.length; j++){
                if(decryptedCode[j] === emblem[i])
                {
                    // console.log(decryptedCode[j]);
                    c++;
                    decryptedCode.splice(j,1);
                    break;
                }
            }
            // console.log(c);
            if(c > 0){
                // console.log("arr->", arr);
                arr.shift();
            }
            else{
                return 0;
            }
        }
        // console.log(arr);
        if(arr.length === 0){
            return 1;
        }
    }
    else{
        return 0;
    }
    
}


function geektrust(arr){
    // console.log(arr);
    // const { crack, check, emblemFinder } = require('./utils/index.js')
    let x = arr;
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
        return(y);
    }
    else{
        return("NONE");
    }
}


module.exports.crack = crack;
module.exports.emblemFinder = emblemFinder;
module.exports.check = check;
module.exports.geektrust = geektrust;
// console.log(emblemFinder("WATER").length);

// console.log(crack('FAIJWJSOOFAMU', 5)); // LAND
// console.log(crack('STHSTSTVSASOS', 7)); // ICE
// console.log(crack('AJXGAMUTA', 6)); // FIRE
// console.log(crack('NVYPSSH', 7)) // SPACE
// console.log(crack("VJAVWBZ", 7)) // WATER


// GORILLA, 7 -> NVYPSSH
// OCTOPUS, 7 -> VJAVWBZ