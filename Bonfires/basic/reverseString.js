// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
   
    var newArray = str.split("");
    
    var reversed = "";
    
    for (var i = str.length-1; i >= 0; i--) 
    {
        reversed += newArray[i];
    }

    return reversed;

}

console.log(reverseString('hello'));