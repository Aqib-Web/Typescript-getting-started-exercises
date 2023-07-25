//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list..

export {};
const orignalGuestList: string[] = ["Mr. Ahmed", "Mrs. Asma", "Sir Rashid"];
const oldGuest: string = "Mrs. Asma";
const newGuest: string = "Charlie";
const moreGuestList: string[] = ["Zahid", "Zubair", "Zara"];

console.log("Old guests List: ", orignalGuestList);
console.log(`${oldGuest} can't come to the dinner tonight`);
console.log("New guest: ", newGuest);

const indexOfGuest = orignalGuestList.indexOf(oldGuest);
if (indexOfGuest !== -1) {
  orignalGuestList[indexOfGuest] = newGuest;
}

console.log("More New guests List: ", orignalGuestList);

for (const guest of orignalGuestList) {
  console.log(
    `Hey ${guest}, you are invited to the dinner tonight at 9:00PM. See ya!`
  );
}
//New code of Exersice 16 starts here
console.log("\nWait! We found a bigger dinner table!\n");

console.log("Making List of new Guests.... ", moreGuestList);
orignalGuestList.unshift(moreGuestList[0]);
orignalGuestList.splice(
  Math.floor(orignalGuestList.length / 2),
  0,
  moreGuestList[1]
);

orignalGuestList.push(moreGuestList[2]);
console.log("New Guest List created! ", orignalGuestList);

for (const guest of orignalGuestList) {
  console.log(
    "Dear " + guest + ", you are invited to the dinner. Please join us."
  );
}
