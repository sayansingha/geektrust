export function crack(encryptedString, unshiftAmount){
    var plainText = "";
    for(var i = 0; i < encryptedString.length; i++) {
        var encryptedCharacter = encryptedString.charCodeAt(i);
        if(encryptedCharacter >= 97 && encryptedCharacter <= 122) {
            plainText += String.fromCharCode((encryptedCharacter-97 - unshiftAmount + 26) %26 + 97 );
        } else if(encryptedCharacter >= 65 && encryptedCharacter <= 90) {
            plainText += String.fromCharCode((encryptedCharacter-65 - unshiftAmount + 26) %26 + 65 );
        } else {
            plainText += String.fromCharCode(plainCharacter);
        }
    }
    return plainText;
}

export function keyFinder(kingdom){
    switch(kingdom){
        case "AIR": 
            return 3;
        case "WATER":
        case "SPACE":
        case "ICE":
            return 7;
        case "LAND":
            return 5;
        case "FIRE": 
            return 6;
        default:
            return 0;
    }
}

function seasarCipher(letter, key){

}