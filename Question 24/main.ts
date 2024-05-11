// Question 24: More Conditional Tests: You don’t have to limit the number of tests you create 
// to 10. If you want to try more comparisons, write more tests. Have at least one True and one 
// False result for each of the following:


let myName = "Syed Ali Hussain";
if(myName == "Syed Ali Hussain"){
    console.log("Hello Syed Ali Hussain");
}else{
    console.log("Hello unknown person");
 }
if(myName.toLowerCase() == "Syed Ali Hussain"){
    console.log("Hello Syed Ali Hussain");
}else{
    console.log("Hello syed ali hussain of lowercase");
}
let myAge = 16;
if(myAge >= 10){
    console.log("You are eligible for the ride");
}else{
    console.log("You aren't eligible for the ride");
}
if(myAge >= 18){
    console.log("You are eligible for the driving license");
}else{
    console.log("You aren't eligible for the driving license");
}
let myWeight = 62;
if(myAge <= 17 && myWeight <= 70){
    console.log("You are eligible for the dodging car");
}else{
    console.log("You are not eligible for the dodging car");
}
if(myAge <= 13 && myWeight <= 45){
    console.log("You are eligible for the bouncy castle");
}else{
    console.log("You are not eligible for the bouncy castle");
}
let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let isPineapplePresent: boolean = false;
// for (let fruit of fruits) {
//     if (fruit === "Pineapple") {
//         isPineapplePresent = true;
//         break; 
//     }
// }
// if (isPineapplePresent) {
//     console.log("Pineapple is in the array.");
// } else {
//     console.log("Pineapple is not in the array.");
// }
let isApplePresent: boolean = false;

for (let fruit of fruits) {
    if (fruit === "Apple") {
        isApplePresent = true;
        break; // Once found, no need to continue iterating
    }
}

if (isApplePresent) {
    console.log("Apple is in the array.");
} else {
    console.log("Apple is not in the array.");
}