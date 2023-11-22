//ts type inference assumes this array has all strings
const carMakers = ['ford', 'toyota', 'chevy'];

//ts type annotation for array that only contains strings
//const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// array of complex objects
const dates = [new Date(), new Date()]

//ts type inference assumes this array contains arrays with strings
/// carsByMake: string[][] = [...]
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro'],
]

// helps with inference when extracting values
const car = carsByMake[0]

// prevent incompatible values
carsByMake.push(100);

// help with 'map'
carMakers.map((car: string): string => {
    return car;
})