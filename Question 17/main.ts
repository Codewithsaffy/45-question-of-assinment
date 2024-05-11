// Question 17: Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.


let guestList = ["Luffy", "Eren", "Goku"];
 for (let guest of guestList){
      console.log(`Hey ${guest}, I would be delighted if you attend the grand dinner party at my house on 25th of February at 9:00PM.`);
  }
console.log("\nHey everyone, I found a bigger dining table so I will be inviting more people.\n");
guestList.unshift("Kaneki");
let index = Math.floor(guestList.length / 2);
guestList.splice(index, 0, "Ichigo");
guestList.push("Natsu");
for (let guest of guestList){
    console.log(`Salam ${guest}, Please be sure to attend the dinner party at my home tomorrow.`);
}
console.log("\nI am really sorry and embarassed to say that the dining table broke and I can only invite two people now.\n");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`I am sorry that I won't be able to invite ${removedGuest} to the dinner.`);
}
for (let n of guestList){
    console.log(`${n}, You are still invited!`);
}
while (guestList.length > 0) {
    guestList.pop();
}
console.log(guestList);