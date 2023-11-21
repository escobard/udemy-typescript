// variable declaration with a type annotation
/// declares apples variable, sets type annotation to number, sets value to 5
const apples = 5;

// works as expected, assigned value is a string
let speed: string = 'fast'

// throws error, assigned value is not a string
let fast: string = 11

let hasName: boolean = true;

// null type annotations have type declaration with the same name as the value
let nothing: null = null;

// only allows for date object declaration
let now: Date = new Date()

// throws error, assigned value is not a date
let present: Date = {};

// arrays - define what types of values the array will have - only works if all array children contains the same types
/// define annotation for array of strings
let colors: string[] = ['red', 'green', 'blue'];
let number: number[] = [1,2,3]

/// throws an error because array has more than just strings
let notColors: string[] = ['red', 'green', {}];

// Classes
class Car {

}

// ts annotation declares that variable car can only ever be instance of class car
let car: Car = new Car();

// object annotation declaration
let point: { x: number; y: number; }  = {
    x: 10,
    y: 20
}

// Function - somewhat nasty syntax
/// (i:number) defines arguments and types for arguments
/// => void defines what the function returns, in this case nothing
/*
actual functions declaration, syntax broken down
const logNumber:
    // define allowed arguments
    (i: number) =>
        // define return value
        void =
    // define arguments and their type
    (i: number) => {
        console.log(i);
}*/

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use Annotations - !IMPORTANT
// 1) function that returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);