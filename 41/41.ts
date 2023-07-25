// 41. Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

export {};

const magicians = ["John", "Jack", "Jerry", "Jordan"];

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);
