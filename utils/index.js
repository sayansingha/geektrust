/**
 * ceasarCipherDecrypter returns a decrypted code following the methods of the ceasar cipher decryption.
 * 
 * @param: {string} encryptedString, {number} unShiftAmount
 *          Elements: {string} encryptedString: string that is to be decrypted(encrypted string)
 *                    {number} unShiftAmount: number that is used to unshift in the ceasar cipher decryption
 * 
 * @return: {string} decrypted string
 */

const { emblemsForKingdoms } = require('./magicStrings');
function ceasarCipherDecrypter(encryptedString, unshiftAmount){
    var decryptedCode = "";
    for(var i = 0; i < encryptedString.length; i++) {
        var encryptedCharacter = encryptedString.charCodeAt(i);
        if(encryptedCharacter >= 97 && encryptedCharacter <= 122) {
            decryptedCode += String.fromCharCode((encryptedCharacter-97 - unshiftAmount + 26) %26 + 97 );
        } else if(encryptedCharacter >= 65 && encryptedCharacter <= 90) {
            decryptedCode += String.fromCharCode((encryptedCharacter-65 - unshiftAmount + 26) %26 + 65 );
        } else {
            decryptedCode += String.fromCharCode(encryptedCharacter);
        }
    }
    return decryptedCode;
}


/**
 * emblemFinder returns the emblem for a particular kingdom or 0 if it's not found.
 * 
 * @param: {string} kingdomName
 *          Elements: {string} kingdomName: name of the kingdom whose emblem is needed.
 * 
 * @return: {string | 0} emblem name or 0 if it's not found.
 */


function emblemFinder(kingdom) {
    const emblem = emblemsForKingdoms[kingdom];
    if (emblem) {
        return emblem;
    }
    return 0;
}

/**
 * checkDecryptedCodeMatchesEmblem returns 0 or 1 depending on if the decrypted code has all the charachters as many times as in the emblem.
 * 
 * @param: {string} decryptedCode, {string} kingdom
 *          Elements: {string} decryptedCode: the decrypted code to check if it matches with the emblem
 *                    {string} kingdom: the name of the kingdom whose emblem needs to be matched with the decrypted code
 * 
 * @return: {0 | 1} 0 if it's not a match, otherwise 1.
 * 
 */

function checkDecryptedCodeMatchesEmblem(decryptedCode, kingdom){
    let emblem = emblemFinder(kingdom);
    if(emblem){
        let emblemSplit = emblem.split('') 
        decryptedCode = decryptedCode.split('');
        for(let i = 0;i < emblem.length; i++){
            let count = 0;
            for(let j = 0;j < decryptedCode.length; j++){
                if(decryptedCode[j] === emblem[i])
                {
                    count++;
                    decryptedCode.splice(j,1);
                    break;
                }
            }
            if(count > 0){
                emblemSplit.shift();
            }
            else{
                return 0;
            }
        }
        if(emblemSplit.length === 0){
            return 1;
        }
    }
    else{
        return 0;
    }
    
}

/**
 * main returns an array of all the kingdoms under king Shan if there are more than or equal to 3 kingdoms that have send the right code
 *              or it returns "NONE" if the above criteria is not met.
 * @param: {Array of strings} input 
 *         Elements: {Array of strings} input: It is an array of strings in a kingdom-code pair. 
 *                      example: ["LAND ASHDIHIBFD", "WATER ASOFDBFVRWFB", ...]
 * 
 * @return: {Array of strings | "NONE"} Array of kingdoms under Shan or "NONE".
 */


function main(input){


    if(input.length < 3){
        return "NONE";
    }
    
    let kingdomsUnderShan = ['SPACE']; 

    for (let i = 0;i < input.length; i++){
        let index = input[i].indexOf(' ');
        let singleKingdomCodePair = [];
        singleKingdomCodePair.push(input[i].slice(0, index).trim());
        singleKingdomCodePair.push(input[i].slice(index + 1, input[i].length).trim());
        
        let emblemLength = emblemFinder(singleKingdomCodePair[0]).length;
        let decryptedCode = ceasarCipherDecrypter(singleKingdomCodePair[1].trim(), emblemLength);
        
        let match = checkDecryptedCodeMatchesEmblem(decryptedCode, singleKingdomCodePair[0]);
        if(match){
            kingdomsUnderShan.push(singleKingdomCodePair[0]);
        }
    }

    if(kingdomsUnderShan.length >= 4){
        return(kingdomsUnderShan);
    }
    else{
        return("NONE");
    }
}


module.exports.ceasarCipherDecrypter = ceasarCipherDecrypter;
module.exports.emblemFinder = emblemFinder;
module.exports.checkDecryptedCodeMatchesEmblem = checkDecryptedCodeMatchesEmblem;
module.exports.main = main;
