// Question 35: Animals: Think of at least three different animals that have a common 
// characteristic. Store the names of these animals in a list, and then use a for loop to 
// print out the name of each animal. • Modify your program to print a statement about each 
// animal, such as A dog would make a great pet. • Add a line at the end of your program stating 
// what these animals have in common. You could print a sentence such as Any of these animals 
// would make a great pet!


let animal_list: string[] = ["Lion", "Cheetah", "Wolf"];
for(let animal of animal_list){
    if(animal == "Lion"){
        console.log("Lion is the King of the Jungle.");
    }else if(animal == "Cheetah"){
        console.log("Cheetah is the fastest land animal in the world.");
    }else{
        console.log("Wolf is known for their ability to blend in with their prey.");
    }
}
console.log("The common characteristic between these animals is that they are all ferocious and dangerous wild animals that should be treated with utmost care.");