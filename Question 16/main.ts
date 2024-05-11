// Question 16: More Guests: You just found a bigger dinner table, so now more space is 
// available. Think of three more guests to invite to dinner.


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