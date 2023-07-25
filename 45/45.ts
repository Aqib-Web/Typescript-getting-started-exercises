// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: string;
}

function createCar(
  manufacturer: string,
  modelName: string,
  ...options: [string, string][]
): Car {
  const car: Car = { manufacturer, modelName };

  for (const [key, value] of options) {
    car[key] = value;
  }

  return car;
}

// Call the function with the required information and additional options
const car1 = createCar(
  "Toyota",
  "Camry",
  ["color", "red"],
  ["optionalFeature", "Sunroof"]
);
console.log(car1);

const car2 = createCar(
  "Honda",
  "Civic",
  ["color", "blue"],
  ["optionalFeature", "GPS"]
);
console.log(car2);
