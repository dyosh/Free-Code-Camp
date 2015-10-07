// Flatten a nested array. You must account for varying levels of nesting. 

function steamroller(arr) {
  
  var flattenedArray = [];
  
  var flatten = function(arg) {
      if (!Array.isArray(arg)) {
          flattenedArray.push(arg);
      } else {
          for(var item in arg) {
              flatten(arg[item]);
          }
      }
  };
  
  arr.forEach(flatten);
  return flattenedArray;
}