// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let number:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinal;
number.forEach(e => {
        if(e === 1){
                ordinal =  'st';
     } else if (e === 2) {
         ordinal = 'nd';
     } else if (e % 10 === 3 && e !== 13) { 
             ordinal = 'rd';
     } else {
         ordinal = 'th'
     };
   console.log(`${e}${ordinal}`)
});

//TODO SECOND METHOD 

let ordinal1;
for(let i = 1; i<10 ; i++){
    if(i === 1){
        ordinal1 =  'st';
    } else if (i === 2) {
        ordinal1 = 'nd';
    } else if (i % 10 === 3 && i !== 13) { 
        ordinal1 = 'rd';
    } else {
        ordinal1 = 'th'
    };
    console.log(`${i}${ordinal1}`)
}

