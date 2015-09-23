// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  
  var largestNumsArray = [];
  var j = 0;
  var max = 0;

  for(var i = 0; i < arr.length; i++)
  {
        while(j < 4)
        {
            if(arr[i][j] > arr[i][j-1] && arr[i][j] > max)
            {
                max = arr[i][j];
                largestNumsArray[i] = max;
            }
            else if(arr[i][j] < arr[i][j-1] && arr[i][j-1] > max)
            {
                max = arr[i][j-1];
                largestNumsArray[i] = max;
            }
            j++;
        }
        j = 0;
        max = 0;
  }
  
  return largestNumsArray
}

largestOfFour( [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]] );