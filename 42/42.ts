// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
export {};
const magicians = ["John", "Jack", "Jerry", "Jordan"];

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]) {
  for (let x = 0; x < magicians.length; x++) {
    magicians[x] = "Great " + magicians[x];
  }
}

show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
