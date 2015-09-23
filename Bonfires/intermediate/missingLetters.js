// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  
  var fixedStr = str.split("");
  
  for(var i = 1; i < str.length; i++) {
    if (fixedStr[i-1].charCodeAt() + 1 !== fixedStr[i].charCodeAt()) {
      return String.fromCharCode(fixedStr[i-1].charCodeAt() + 1);
    }
  }
  return undefined;
}

fearNotLetter('abce');
