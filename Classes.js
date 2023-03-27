class Animal {
  constructor() {
    this.canMove = true;
  }
  move() {
    console.log('The animal is moving.');
  }
}

class Cat extends Animal {}

const myCat = new Cat();

console.log(myCat.canMove);

myCat.move();