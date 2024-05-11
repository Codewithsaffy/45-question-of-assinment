// Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the 
// function make_great() with a copy of the array of magicians’ names. Because the original 
// array will be unchanged, return the new array and store it in a separate array. Call 
// show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.


let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Doug Henning", "Derren Brown"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let copyMagicians: string[] = [...magician_names];
let greatMagicians: string[] = make_great(copyMagicians);

console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);