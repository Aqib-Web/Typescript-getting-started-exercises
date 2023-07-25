//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const someone: string = "muhammad aqib";

const upperCase = someone.toUpperCase();
const lowerCase = someone.toLowerCase();
const titleCase = someone
  .split(" ")
  .map((l: string) => l[0].toUpperCase() + l.substr(1))
  .join(" ");

console.log(`
Orignal string  = ${someone}

Uppercase  : ${upperCase}
Lowercase  : ${lowerCase}
Titlecase  : ${titleCase}

`);
