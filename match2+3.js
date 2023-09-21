let str = '2+3 223 2223';
let regexp = /.[+]./g;
let matches = str.match(regexp);

console.log(matches);