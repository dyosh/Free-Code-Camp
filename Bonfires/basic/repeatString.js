// Repeat a given string (first argument) n times (second argument). 
// Return an empty string if n is a negative number.

function repeat(str, num) {
  // repeat after me
  
  if(num < 0)
  {
    return "";
  }
  
  var holder = str;
  
  for(var i = 1; i < num; i++)
  {
      str += holder;
  }
  
  return str;
}

repeat('abc', 3);