let arr = [[1, 7, 4, 3], [23, 27, 18, 36], [32, 35, 37, 55], [1000, 10011, 857, 1]]; 

function largest(arr) {
  let firstArr = [];
  var max = 0; 
  for(var i=0;i<arr.length;i++){ 
    max = arr[i][0];
    for(var j=0;j<arr[i].length;j++){ 
      if(arr[i][j] > max){ 
        max = arr[i][j];
      } 
    } 
    firstArr.push(max); 
  } 
  return firstArr;

} 

console.log(largest(arr));

