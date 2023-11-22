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

// flexible array types - array with two different types
/// type inference picks up and sets the expected type
const importantDates = [new Date(), '2030-10-10'];

// annotation for flexible array types
//const importantDates: (Date | 'string')[] = [new Date(), '2030-10-10'];
