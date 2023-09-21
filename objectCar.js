let car = {
  color: "black"
};
car.color = "green";
console.log(car.color);
car.power = function() {
  console.log("engine power");
};
car.power();