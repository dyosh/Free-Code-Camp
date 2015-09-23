// Write a function that splits an array (first argument) into groups the 
// length of size (second argument) and returns them as a multidimensional array.

function chunk(arr, size) {
  var newArray = [];
  var k = 0;

  for(var i = 0; i < Math.ceil(arr.length / size); i++)
  {
      newArray.push([]);
      for(var j = 0; j < size; j++)
      {
          if (arr[k] !== undefined) {       
              newArray[i].push(arr[k]);
              k++;   
          }
      }
  } 
  return newArray;
}

chunk([0, 1, 2, 3, 4, 5], 4)