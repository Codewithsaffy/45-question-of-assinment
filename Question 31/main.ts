// Question 31: No Users: Add an if test to Exercise 28 to make sure the list of 
// users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


let account_names = ["John", "Ali", "Admin", "Michael", "Eric"];

if (account_names.length > 0) {
    for (let account of account_names) {
        if (account == "Admin") {
            console.log("Hello Admin, would you like to view the report?");
        } else {
            console.log(`Hello ${account}, how are you doing today?`);
        }
    }
} else {
    console.log("We need to find some users!");
}
account_names = [];
if (account_names.length > 0) {
    for (let account of account_names) {
        if (account == "Admin") {
            console.log("Hello Admin, would you like to view the report?");
        } else {
            console.log(`Hello ${account}, how are you doing today?`);
        }
    }
} else {
    console.log("We need to find some users!");
}