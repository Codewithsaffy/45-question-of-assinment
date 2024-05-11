// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a 
// motorcycle or a car, and make a list that stores several examples. Use your list to 
// print a series of statements about these items, such as “I would like to own a Honda 
// motorcycle.”




let items = ["Honda Civic", "Ninja H2R", "Audi R6", "Mercedes S Class"];
for (let n of items){
    if (n === "Honda Civic"){
        console.log("The engine of Honda Civic is very modern.");
    } else if (n === "Ninja H2R"){
        console.log("Ninja H2R is one of the fastest motorcycles in the world.");
    } else if (n === "Audi R6"){
        console.log("Audi R6 is one of the most famous cars of Audi.");
    } else if (n === "Mercedes S Class"){
        console.log("The interior of Mercedes S Class is super comfortable");
    }
}
