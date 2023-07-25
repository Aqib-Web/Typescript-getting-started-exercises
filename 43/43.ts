// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicians = ["John", "Jack", "Jerry", "Jordan"];
let unchangedMagicains: string[] = [];

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]) {
  for (let x = 0; x < magicians.length; x++) {
    unchangedMagicains.push("Great " + magicians[x]);
  }
}

make_great(magicians);

show_magicians(magicians);
show_magicians(unchangedMagicains);
