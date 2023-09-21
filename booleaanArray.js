let anyNumbers =  [0, 2, 4, 6, 9, 0, 7];
//let booleanNum = anyNumbers.map(number => Boolean(number));
let booleanNum = anyNumbers.map(number => number < 1);
console.log(booleanNum);