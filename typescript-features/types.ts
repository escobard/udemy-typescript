// boilerplate code to showcase / understand TS type definitions

const today = new Date();
// TS recognizes the objects attached to a new date function invocation
today.getMonth();

const person = {
    age: 20
};

// below throws an error, since object does not have the called property
person.random

// below throws an error, since object does not have the called property
class Color {

}
const red = new Color();
red.random