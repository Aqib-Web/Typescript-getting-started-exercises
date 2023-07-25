//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.

const someNumbers: string[] = ["one", "two", "three", "four"];

console.log(someNumbers);
console.log(someNumbers[10], " (because of index wrong index 10)"); //index error
console.log(someNumbers[2], " (valid index)"); //index error
