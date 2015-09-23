// Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
    var newArray = str.split(" ");

    if(newArray[newArray.length-1] == target ||
       newArray[newArray.length-1].substr(-1) == target)
    {
        return true;
    }
  
  return false;
}

end('Bastian', 'n');