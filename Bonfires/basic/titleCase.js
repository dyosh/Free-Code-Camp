// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words
// like "the" and "of".

function titleCase(str) {
  
    var splitArray = str.split(" ");
    var newArray = [];    
    
    var testArray = [];
      
    for(var i = 0; i < splitArray.length; i++)
    {
        testArray.push(splitArray[i].toLowerCase());
        newArray[i] = splitArray[i].charAt(0).toUpperCase() + 
        	testArray[i].slice(1, testArray[i].length); 
    }
    
    return newArray.join(" ");

}