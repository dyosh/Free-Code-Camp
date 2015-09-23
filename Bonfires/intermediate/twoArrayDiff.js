// Compare two arrays and return a new array with any 
// items not found in both of the original arrays.

function diff(arr1, arr2) {
  var newArr = [];
  var holder;
  
  if (arr1.length === 0){return arr2;} 
  if (arr2.length === 0){return arr1;}

  if (arr1.length >= arr2.length) 
  {
    for(var i = 0; i < arr1.length; i++) {
      holder = arr1.slice(i, i+1);

      if (arr2.indexOf(holder[0]) == -1)
      {
          newArr.push(holder[0]);
      }   
    }
  }
  
  if (arr2.length >= arr1.length) 
  {
    for(var j = 0; j < arr1.length; j++) {
      holder = arr2.slice(j, j+1);

      if (arr1.indexOf(holder[0]) == -1)
      {
          newArr.push(holder[0]);
      }   
    }
  }

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);