// Question 29: Favorite Fruit: Make a array of your favorite fruits, and then write a 
// series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favourite_fruits = ["Apple", "Grapes", "Pineapple"];
for(let fruit of favourite_fruits){
    if(fruit == "Banana"){
        console.log("You really like bananas");
    }else if(fruit == "Apple"){
        console.log("You really like apples");
    }else if(fruit == "Mango"){
        console.log("You really like mangoes");
    }else if(fruit == "Pineapple"){
        console.log("You really like pineapples");
    }else if(fruit == "Grapes"){
        console.log("You really like grapes");
    }
}