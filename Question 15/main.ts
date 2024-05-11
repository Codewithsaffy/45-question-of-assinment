// Question 15: Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. You’ll have to think of someone else 
// to invite.




let guestList = ["Luffy", "Naruto", "Goku"];
 for (let guest of guestList){
      console.log(`Hello ${guest}, please be sure to attend the dinner on 24th of February at 8:00PM sharp.`);
  }
console.log("\n\nUnfortunately, Naruto will not be able to attend the dinner party.\n\n");
guestList[1] = "Eren";
for (let guest of guestList){
    console.log(`Hey ${guest}, I would be delighted if you attend the grand dinner party at my house on 25th of February at 9:00PM.`);
}