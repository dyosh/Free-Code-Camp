// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.

function drop(arr, func) {
  
  for(var i = 0; i < arr.length; i++) {
      if (!func(arr[i])){ 
          arr.shift();
          i = -1;
      } else {
          return arr;
      }
  }
  
  return arr;
}