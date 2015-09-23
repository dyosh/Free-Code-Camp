// Translate the provided string to pig latin.

function translate(str) {
    
    var pigified = str;

    function isVowel(str) {
        if(str === 'a' || str === 'e' || str === 'i' ||
        str === 'o' || str === 'u') {
            return true;            
        } else {
            return false;
        }
    }    
    
    var i = 0;
    var test = false;
    while(test === false && i < str.length) {
        test = isVowel(pigified.substr(i, 1));
        console.log(test);
        i++;
        console.log(i);
    }
    
    if(i === 1) {
        pigified = str + "way";
    } else if (i === str.length) {
        pigified = str + "ay";
    } else {
        pigified =  str.slice(i-1) + str.slice(0,i-1) + "ay";
    }

 return pigified;
}
