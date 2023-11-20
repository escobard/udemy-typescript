// variable declaration with a type annotation
/// declares apples variable, sets type annotation to number, sets value to 5
const apples: number = 5;

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