// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const show_magicians = (magician: string[]) => {
    return magician.forEach((magician) => console.log(magician));
};
const magicians = ["David Copperfield", "David Blaine", "Penn Jillette"];
show_magicians(magicians);
function make_great(magician: string[]) {
    return magician.map((magician) => `emloye name: ${magician}`);
}
const modefied_array = make_great(magicians);
console.log("modefied_array: " + show_magicians(modefied_array));
const original_array = show_magicians(magicians);
console.log("Orignal Array: " + original_array);

// function show_magicians(magicians:string[]) {
//     magicians.forEach((magician) => console.log(magician));
//   }

//   const magicians = ["David Copperfield", "David Blaine", "Penn Jillette"];
//   show_magicians(magicians);

//   // Great Magicians

//   const greatMagicians = make_great(magicians);
//   show_magicians(greatMagicians);

//   const originalMagicians = [
//     "David Copperfield",
//     "David Blaine",
//     "Penn Jillette",
//   ];
//   const modifiedMagicians = make_great(originalMagicians.slice());
//   show_magicians(originalMagicians);
//   show_magicians(modifiedMagicians);
