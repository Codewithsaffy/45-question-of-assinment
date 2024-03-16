// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white space.

let person_Name:string = "\t \n Yousuf \n \t"
console.log(`Original name:  ${person_Name}`)
let  Stripping_name:string = person_Name.trim()
console.log(`Stripping Name :${Stripping_name}`);