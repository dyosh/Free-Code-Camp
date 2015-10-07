// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
    
    var binaryArray = str.split(' ');
    var letter, numValue;
    var stringArray = [];
    
    for(var i = 0; i < binaryArray.length; i++) {
        // convert binary to base 2
        numValue = parseInt(binaryArray[i], 2);
        // convert from num to ASCII value
        letter = String.fromCharCode(numValue);
        stringArray.push(letter);
    }
    
    return stringArray.join('');
}

