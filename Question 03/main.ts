// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.


let Name = "Muhammad Yousuf";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.charAt(0).toUpperCase()+Name.slice(1).toLocaleLowerCase());
