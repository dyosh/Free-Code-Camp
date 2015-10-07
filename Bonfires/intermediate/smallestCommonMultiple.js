// Find the smallest common multiple of the provided parameters 
// that can be evenly divided by both, as well as by all sequential
// numbers in the range between these parameters.
//
// The range will be an array of two numbers that will not necessarily 
// be in numerical order.

function smallestCommons(arr) {
    
  var sortedArr = arr.sort(function(a,b) {
    return b - a;
  });
  
  var newArr = [];
  
  for (var i = sortedArr[0]; i >= sortedArr[sortedArr.length-1]; i--) {
      newArr.push(i);
  }
  
  var n;
  var smallestTest;
  var multiplier = 1;
  
  do {
    smallestTest = newArr[0] * newArr[1] * (++multiplier);
    for (n = 2; n < newArr.length; n++) {
        if (smallestTest % newArr[n] !== 0) {
            break;
        }
    }    
  } while (n != newArr.length);
  
  return smallestTest;
   
}