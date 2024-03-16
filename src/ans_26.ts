// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
 
const describe_city = (city:string, country:string =  "USA"):string => {
    return `The city ${city} is located in ${country}.`;
}
console.log(describe_city("New York"));
console.log(describe_city("London", "UK"));
console.log(describe_city("Tokyo",  "Japan"));