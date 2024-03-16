// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const make_shirt = (size:string = "large", message:string = "I love TypeScript")=>{
 return `size: ${size}, "${message}" should be printed on our shirt`
}
console.log(make_shirt())
console.log(make_shirt("medium"))
console.log(make_shirt("small","This is a T-Shirt"));