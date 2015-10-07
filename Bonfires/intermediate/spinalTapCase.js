// Convert a string to spinal case. 
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
 
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  var spinalWord = str.toLowerCase().replace(/\s+|\_+/g, '-');
                                      
  return spinalWord;
}