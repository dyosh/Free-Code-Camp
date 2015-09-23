// We'll pass you an array of two numbers. 
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first


function sumAll(arr) {

    var min, max;
    var sum = 0;
    
    if (arr[0] < arr[1])
    {
        min = arr[0];
        max = arr[1];
    } 
    else 
    {
        min = arr[1];
        max = arr[0];
    }
    
    var length = max - min;
    
    for(var i = min; i <= max; i++) 
    {   
        sum += min;
        min++;
    }
    
    return sum;
}


sumAll([1, 4]);