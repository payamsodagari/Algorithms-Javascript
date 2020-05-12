//1. Addition

for(let i = 200;i <= 270; i++) {
    if((i % 5 === 0 || i % 3 === 0) && i % 15 !== 0){
        console.log(i)
    }
}


for(let i = 200;i <= 2700; i++) {
    if(i % 5 === 0 && i % 3 === 0){
        console.log("not return ")
    } else if( i % 3 === 0){
        console.log(i, "3")
    } else if(i % 5 === 0){
    console.log(i, "5")
    }
}


//2. Shift the Values
const x = [2, 1, 6, 4, -7]
for(let i = x.length-1; i >= 0; i--){
    console.log(x[i])
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


let a = 0, b = 1, c = b
for(let i = 0; i<= 10; i++) {
    console.log(a)
    c = a + b
    a = b
    b = c
}


let fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
for(let i = 2; i<= 10; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}
console.log(fibonacci)


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
