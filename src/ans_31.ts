// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
let checkCar = (Carname:string, modleno:number) => {
    const cars:{
        name: string;
        model:number;
        color:string;
        type:string;
    } = {
      name: "civic",
      model: 1083,
      color: "black",
      type: "auto",
    };
    if (Carname === cars.name && modleno === cars.model) {
      console.log(cars);
    }
  };
  
  checkCar("civic", 1083);