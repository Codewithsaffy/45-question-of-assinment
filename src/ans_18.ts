// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

let random1 = Math.floor(Math.random() * 3);
console.log(random1);
let colors1 = ["red", "green", "yellow"];
let alien_color1 = colors1[random1];
// If block

if (alien_color1 === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}
// Else block
if (alien_color1 !== "green") {
    console.log("The player just earned 10 points.");
} else {
    console.log("The player just earned 5 points for shooting the alien.");
}