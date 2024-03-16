// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let AdminName: string = "yousuf";

let greeting: string[] = ["Ahsan", "zayan", "Tallal", "Muhammad"];
greeting.push(AdminName)
greeting.map((item): void => {
    console.log(item === AdminName ? `Hello ${AdminName}, would you like to see a status report?` : `Hello ${item}, thank you for logging in again`);
});
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
while (greeting.length > 1) {
    greeting.shift()
}
if (greeting.length === 1) {
    console.log("We need to find some users!");
}
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["John", "Alice", "Bob", "Eve", "Carol"];
let new_users = ["Mallory", "Eve", "Dave", "Bob", "Frank"];

new_users.forEach((Nuser) => {
    if (current_users.map(Cuser => Cuser.toLowerCase()).includes(Nuser.toLowerCase())) {
        console.log(`User ${Nuser} already exists`);
    } else {
        console.log(`Welcome new user ${Nuser}`)
    }
})


console.log(greeting)