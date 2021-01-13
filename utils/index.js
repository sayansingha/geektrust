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
module.exports.emblemFinder = emblemFinder;
module.exports.check = check;
// console.log(emblemFinder("WATER").length);
