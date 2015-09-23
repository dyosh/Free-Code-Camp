// Truncate a string (first argument) if it is longer than the given maximum 
// string length (second argument). Return the truncated string with a "..." ending.

function truncate(str, num) {
  // Clear out that junk in your trunk
    
  if(num > str.length-1)
  {
    return str;
  }
  
  var newString = str.slice(0, num-3) + "...";
    
  return newString;
}

truncate('Peter Piper picked a peck of pickled peppers', 14)