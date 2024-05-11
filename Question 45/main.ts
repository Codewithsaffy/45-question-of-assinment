// Question 45: Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept 
// an arbitrary number of keyword arguments. Call the function with the required information and 
// two other name-value pairs, such as a color or an optional feature. Print the Object that’s 
// returned to make sure all the information was stored correctly.


type Car = {
    manufacturer_car: string;
    model_car: string;
    color_car?: string;
    year_car?: number;
};

function generate_car(manufacturer: string, model_name: string, color?: string, year?: number): Car{
    let Car: Car = {
        manufacturer_car: manufacturer,
        model_car: model_name
    };

    if(color !== undefined){
        Car.color_car = color;
    }
    if(year !== undefined){
        Car.year_car = year;
    }
    return Car;
}

let Car1 = generate_car("Honda", "Civic");
let Car2 = generate_car("Toyota", "Corolla", "Black", 2017);
console.log(Car1);
console.log(Car2);