// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  if (howMany === 0)
  {
      return arr;
  }
  
  var newArr = arr.slice(howMany,  arr.length);
  
  return newArr;
}

slasher([1, 2, 3], 2);