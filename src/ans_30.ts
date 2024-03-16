// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items:string[]) {
    console.log(
      "Creating a sandwich with the following items:",
      items.join(", ")
    );
  }
  
  make_sandwich("ham", "cheese", "lettuce");
  make_sandwich("turkey", "bacon");
  make_sandwich("peanut butter", "jelly", "banana");