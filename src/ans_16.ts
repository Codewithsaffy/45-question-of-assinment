// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log("apple" === "apple");
console.log("orange" !== "orange");
// • Tests using the lower case function
console.log("hello" === "HELLO".toLowerCase());
console.log("WORLD" !== "world".toUpperCase());
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 === 5);
console.log(5 !== 5);
console.log(10 > 5);
console.log(5 > 10);
console.log(10 >= 9);
console.log(5 >= 10);
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
const fruits:string[] = ["apple", "banana", "orange"];
console.log(fruits.includes("apple"));
// • Test whether an item is not in a array
console.log(fruits.includes("pear"));