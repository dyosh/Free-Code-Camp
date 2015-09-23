// Return the sum of all odd Fibonacci numbers up to and including 
// the passed number if it is a Fibonacci number.

function sumFibs(num) {
  
  var a = 1;
  var b = 1;
  var c = 0;
  var oddFib = 0;
    
    while(a <= num){
        if (a % 2 !== 0){
          oddFib += a;
        }
        
        c = a + b;
        a = b;
        b = c;              
    }
 
  return oddFib;
}

sumFibs(4);
