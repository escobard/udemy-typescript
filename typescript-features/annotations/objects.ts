// ts annotation for object with a function
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// call object function's return statement
/// {age} argument deconstructs the profile.age value
/// {age: number} is the type annotation for the value
const { age }: { age: number } = profile;

// more complicated example
const { coords: { lat, lng} }: { coords: { lat: number; lng: number; } } = profile;