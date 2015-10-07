// Create a function that sums two arguments together.
// If only one argument is provided, then return a function 
// that expects one argument and returns the sum.

function add() {
  var numHolder = [];
  
  var isNum = function(arg) {
    for(var item in arg) {
      if (typeof arg[item] === 'number') {
          numHolder.push(arg[item]);
      } else {
          return false;
      }
    }
    return true;
  };
  
  var calculateSum = function(array) {
      var sum = 0;
      for(var num in numHolder) {
          sum += numHolder[num];
      }
      return sum;      
  };
  
  if (arguments.length > 1) {
      if (!isNum(arguments)) {return undefined;}
      return calculateSum(numHolder);
  } else if (arguments.length === 1) {
        if (!isNum(arguments)) {return undefined;}
        return function(arg2) {
        if(!isNum(arguments)) {return undefined;}
        return calculateSum(numHolder);
      };
  }

}