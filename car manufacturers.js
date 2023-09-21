let carManufacturers = ["Toyota", "Volkswagen Group", "Hyundai", "General Motors"];
let carManufacturersString = carManufacturers.toString();
console.log(carManufacturersString);
(function convertToArray() {
let carManufacturersString = "Toyota, Volkswagen Group, Hyundai, General Motors";
let carManufacturers = carManufacturersString.split(" , ");
console.log(carManufacturers);
}())
