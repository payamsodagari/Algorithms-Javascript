//1. Print 1 - 135
for(num = 1; num <= 135; num ++){
    console.log(num);
  }
  
  //2. Print Odd Numbers 1 - 135
  for(num = 1; num <= 135; num +=2){
    console.log(num);
  }
  

  for (let index = 1; index <= 135; index++){
    if(index % 2 === 1){
      console.log(index)
    }
  }

//3. Sum of Printed Numbers
for(i =0; i <= 40; i++){
  
  console.log('Number is:' + i + " sum " +i);
}


//4. Print the elements of an array

var x = [1, 4, 2, 12];
for (let index = 0; index <= x.length-1; index++){
    console.log(x[index])
  }


//5. Find Max

const x = [1, 2, -3, -1];
let max = x[0];
for (let i = 0; i <= x.length-1; i++){

  if( x [i] > max){
    max = x[i];
  }
}
  console.log(max)


//6. Get Average

const x = [2, 1, 3];

let sum = 0;
let total;
for (let i = 0; i < x.length; i++){
  sum += x[i];
  total = sum / x.length;
}
console.log(total)


//7. Eliminate the Negatives

const arr = [2, -1, 4, -3]
for (let i = 0; i < arr.length; i++){
  if( arr[i] < 0 ){
    arr[i]=0
  }
}
console.log(arr)



//8. Number to String

const arr = [1, -1, 0, -3]

for (let i = 0; i < arr.length; i++){
  if( arr[i] < 0 ){
    arr[i]='Turing'
  }
}
console.log(arr)



