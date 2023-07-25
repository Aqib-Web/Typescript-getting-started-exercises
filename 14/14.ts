//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.

const guestList: string[] = ["Mr. Ahmed", "Mrs. Asma", "Sir Rashid"];

for (const guest of guestList) {
  console.log(
    `Hey ${guest}, you are invited to the dinner tonight at 9:00PM. See ya!`
  );
}
