// Return a new array that transforms the element's 
// average altitude into their orbital periods.

function orbitalPeriod(arr) {
  // T = 2pi(a^3/GM)^(1/2)   where a = earthRadius + avgAlt
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  function calculateOrbitalPeriod(obj) {
    var a = obj.avgAlt;
    var T = (2*Math.PI)*Math.pow(Math.pow((earthRadius + a), 3) / GM, 0.5);
    
    delete obj.avgAlt;
    obj.orbitalPeriod = Math.round(T);
    
  }
  
  for(var item in arr) {
    calculateOrbitalPeriod(arr[item]);
  }
  
  return arr;
}
