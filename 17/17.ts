//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

//New code of Exersice 17 starts here
console.log("\n****Attention!*** We have space for only 2 guests.\n");

while (orignalGuestList.length > 2) {
  const removedGuest = orignalGuestList.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

for (const guest of orignalGuestList) {
  console.log(
    `Dear ${guest}, you are still invited to the dinner. Please join us.`
  );
}

orignalGuestList.length = 0;
console.log("Final list:", orignalGuestList);
