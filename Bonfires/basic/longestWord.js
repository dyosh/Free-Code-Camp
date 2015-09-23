//Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  
    var stringArray = str.split(" ");
    
    var max = 0;
    
    for (var i = 0; i < stringArray.length; i++)
    {
        if (stringArray[i].length > max) 
        {
            max = stringArray[i].length;
            console.log(stringArray[i]);
        }
    }
  return max;
}

console.log(findLongestWord('What if we try a super-long word, otorhinolaryngology'));