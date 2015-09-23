// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

function mutation(arr) {
    var testString = arr[1].toLowerCase();
    var splitString = testString.split("");
    
    var contains = true;

  
    for(var j = 0; j < splitString.length; j++)
    {
        if(arr[0].toLowerCase().indexOf(splitString[j]) >= 0)
        {
            contains = true;
        }
        else 
        {
            return false;
        }
    }

    return contains;
}
mutation(['hello', 'Hello']);