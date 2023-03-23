function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
} 
let myArray = [3, 7, 2, 8, 5, 1];
let myNumber = 8;

let index = findIndex(myArray, myNumber);
console.log(index);