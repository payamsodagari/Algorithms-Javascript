function fact(n){
  var num =1;
    for (var i = 1; i <= n; i++){
     num *=i;
    
   }
   return num;
  }
  console.log("should return " + fact(5))

 // ---------------
function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize(5);
  console.log("should return " + factorialize(6))

  //-------------   

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num === 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(5);
  console.log("should return " + factorialize(6))


//---------------

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  factorialize(5);
  console.log("should return " + factorialize(6))