//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = "yousufKhan"
console.log(` In lowercase: ${personName.toLowerCase()}, \n In Uppercase: ${personName.toUpperCase()}, \n In Titlecse: ${personName[0].toUpperCase()+personName.slice(1).toLowerCase()}`)
