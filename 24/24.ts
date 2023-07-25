//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

const color: string = "White";
const colours: string[] = ["red", "blue", "green"];

console.log("Favourite color == 'White'? I predict True.");
console.log(color == "White"); //Tests for equality

console.log("Favourite color != 'White'? I predict False.");
console.log(color != "White"); //Tests for inequality

console.log("Favourite color == 'white'? I predict False.");
console.log(color == "False"); //Tests using the lower case function

console.log("33 == 33 ? I predict True");
console.log(33 == 33); //Numerical tests involving equality

console.log("12 != 12 ? I predict False");
console.log(12 != 12); //Numerical tests involving inequality

console.log("33 > 12 ? I predict True");
console.log(33 > 12); // Numerical tests involving greater than

console.log("40 < 12 ? I predict False");
console.log(40 < 12); // Numerical tests involving less than

console.log("45 >= 45 ? I predict True");
console.log(33 > 12); // Numerical tests involving greater than or equal to

console.log("40 =< 12 ? I predict False");
console.log(40 < 12); // Numerical tests involving less than or equal to

console.log("40>12 && 76==76 ? I predict True");
console.log(40 > 12 && 76 == 76); // Tests using "and" operator

console.log("40>12 || 76==76 ? I predict True");
console.log(14 < 12 || 76 == 76); // Tests using "or" operator

console.log("\nArray of favourite colors", colours);
console.log("\nDoes array includes 'red'?");
console.log(colours.includes("red")); //Test whether an item is in a array

console.log("Does array includes 'orange'");
console.log(colours.includes("orange")); //Test whether an item is not in a array
