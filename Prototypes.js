function Animal () {
  this.canMove = true;
}
Animal.prototype.move = function() {
  console.log('The animal is moving.');
}
function Cat() {}
Cat.prototype = Object.create(Animal.prototype);
const myCat = new Cat();
console.log(myCat.canMove);
myCat.move();


// const animaal = new Object({
//   move: 'canMove',
// })
// const cat = Object.create(animaal)

// console.log(cat.move)
