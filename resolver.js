// import { kingdoms, emblem } from "./utils/magicStrings";
const {kingdoms, emblem } = require('./utils/magicStrings');
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

function keyFinder(value){
    switch(value){
        case kingdoms[0]: 
            return emblem[kingdoms[0]].length;
        case kingdoms[1]:
            return emblem[kingdoms[1]].length;
        case kingdoms[2]:
            return emblem[kingdoms[2]].length;
        case kingdoms[3]:
            return emblem[kingdoms[3]].length;
        case kingdoms[4]:
            return emblem[kingdoms[4]].length;
        case kingdoms[5]: 
            return emblem[kingdoms[5]].length;
        default:
            return 0;
    }
}

function emblemFinder(value){
    switch(value){
        case kingdoms[0]: 
            return emblem[kingdoms[0]];
        case kingdoms[1]:
            return emblem[kingdoms[1]];
        case kingdoms[2]:
            return emblem[kingdoms[2]];
        case kingdoms[3]:
            return emblem[kingdoms[3]];
        case kingdoms[4]:
            return emblem[kingdoms[4]];
        case kingdoms[5]: 
            return emblem[kingdoms[5]];
        default:
            return "";
    }
}

function check(decryptedCode, kingdom){
    let emblem = emblemFinder(kingdom);
    // console.log(emblem);
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
module.exports.crack = crack;
module.exports.keyFinder = keyFinder;
module.exports.check = check;