// Write a function that takes two or more arrays and returns a new array 
// of unique values in the order of the original provided arrays.

function unite(arr1, arr2, arr3) {    
    var argsArray = [];
    for(var i = 0; i < arguments.length; i++){
        argsArray.push(arguments[i]);
    }
    
    var unitedArray = [];
    for(var j = 0; j < argsArray.length; j++) {
        for(var k = 0; k < argsArray[j].length; k++) {
            if (unitedArray.indexOf(argsArray[j][k]) === -1){
                unitedArray.push(argsArray[j][k]);
            }
        }
    }
   
  return unitedArray;
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
