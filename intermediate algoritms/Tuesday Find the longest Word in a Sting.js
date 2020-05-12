const str = "May the force be with you";
const strArray = str.split(' ');
const sorted = strArray.sort((strA, strB) => {
    return strB.length - strA.length;
  }
);
console.log(sorted[0].length);