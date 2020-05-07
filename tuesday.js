//1. Addition

for(let index = 200;index <= 270; index++) {
    if((index % 5 === 0 || index % 3 === 0) && index % 15 !== 0){
        console.log(index)
    }
}


for(let index = 200;index <= 2700; index++) {
    if(index % 5 === 0 && index % 3 === 0){
        console.log("not return ")
    } else if( index % 3 === 0){
        console.log(index, "3")
    } else if(index % 5 === 0){
    console.log(index, "5")
    }
}


//2. Shift the Values
x = [2, 1, 6, 4, -7]
for(let index = 0;index <= x.length; index++){
    console.log(x[index])
}


const x = [2, 1, 6, 4, -7]
for(let index = x.length -1;index >= 0; index--){
    console.log(x[index])
}

//3. FizzBuzz
for(let i = 1; i <= 135; i++) {
    if(i % 15 == 0){
        console.log("fizzBuzz ")
    } else if( i % 3 === 0){
        console.log("fizz")
    } else if(i % 5 === 0){
    console.log("buzz")
    } else {
        console.log(i);

    }
}


//4. Fibonacci
var a = 0;
var b = 1;
for(var i = 0; i < 22; i= a+b) {
  console.log(i)
  a=b;
  b=i;
}


//5. Remove the Negative

let arr = [1,-2,4,1];
let final= [];

for (let i = 0; i < arr.length; i++){
  if( arr[i] >= 0 ){
    final.push(arr[i]);
  }
}
console.log(final);

//6. Communist Censorship

var x = ['man', 'I', 'love', 'the', 'restart', 'bootcamp'];
var y = '';

for(var i = 0; i < x.length; i++) {
  if(x[i] === 'restart'){
    var z = 'turing';
    x[i] = z;
  }
  if(x[i] === 'bootcamp') {
    var y = "";
    for(var j = 0; j <= x[i].length; j++) {
      y = y + '*';
    }
    x[i] = y;
  }
}
console.log(x)