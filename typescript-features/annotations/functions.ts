// sample function type annotation, two number arguments, returns a number
const add = (a:number, b: number): number => {
    return a + b;
};

// ts type inference assumes the type for the return value of the function, making return type annotation optional
/// it is recommended to always define the return type annotation
const addNoAReturnAnnotation = (a:number, b: number) => {
    return a + b;
};

// traditional function annotation
function divide(a: number, b: number): number {
    return a / b;
}

// traditional functional annotation with a constant
const multiply = function(a: number, b:number): number {
    return a * b;
}

// annotations for functions that return nothing
const logger = (message: string): void => {
    console.log(message);
}

// annotations for functions that return an error
const throwError = (message: string): never => {
    throw new Error(message);
}


const forecast = {
    date: new Date(),
    weather: 'sunny'
};

// annotation for function with an object argument
const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

/*
// es6 annotation for function with an object argument
const logWeather = ({ date, weather }: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
*/

logWeather(forecast);