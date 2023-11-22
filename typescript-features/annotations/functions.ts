// sample function type annotation, two number arguments, returns a number
const add = (a:number, b: number): number => {
    return a + b;
};

// ts type inference assumes the type for the return value of the function, making return type annotation optional
/// it is recommended to always define the return type annotation
const addNoAReturnAnnotation = (a:number, b: number) => {
    return a + b;
};
