//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
export {};
const orignalGuestList: string[] = ["Mr. Ahmed", "Mrs. Asma", "Sir Rashid"];
const oldGuest: string = "Mrs. Asma";
const newGuest: string = "Charlie";

console.log("Old guests List: ", orignalGuestList);
console.log(`${oldGuest} can't come to the dinner tonight`);
console.log("New guest: ", newGuest);

const indexOfGuest = orignalGuestList.indexOf(oldGuest);
if (indexOfGuest !== -1) {
  orignalGuestList[indexOfGuest] = newGuest;
}

console.log("New guests List: ", orignalGuestList);

for (const guest of orignalGuestList) {
  console.log(
    `Hey ${guest}, you are invited to the dinner tonight at 9:00PM. See ya!`
  );
}

console.log(`\n\n Total no of people invited = ${orignalGuestList.length}`);
