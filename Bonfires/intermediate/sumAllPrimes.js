// Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
  var sum = 0;

  for(var i = 2; i <= num; i++) {
      if (i === 2) {
          sum += i;
      } else if (isPrime(i)) {
          sum += i;
      }
  }

  function isPrime(value) {
      for (var i = 2; i < value; i++) {
          if (value % i === 0) {
              return false;
          }
      }
      return true;
  }

  return sum;

}
sumPrimes(10);