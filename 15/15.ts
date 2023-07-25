//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

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
