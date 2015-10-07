// Check if the predicate (second argument) returns truthy (defined) 
// for all elements of a collection (first argument).

// For this, check to see if the property defined in the second argument 
// is present on every element of the collection.

function every(collection, pre) {
    
    var counter = 0;
    
    Object.getOwnPropertyNames(collection).forEach(function(val, idx, array) {
        console.log(collection[val]);
        if (collection[val].hasOwnProperty(pre) || collection[val][idx] === pre) {
            counter++;
        }
    });
    
    if (counter === collection.length) {
        return true;
    } else {
        return false;
    }
}
