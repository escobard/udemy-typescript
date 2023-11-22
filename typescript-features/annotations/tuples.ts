// object to be converted to array
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// tuple version of the drink object
/// ts inference allows this behavior, but it is confusing for developers to read, recommended to add annotation
/// const pepsi = ['brown', true, 40];
const pepsi: (string | boolean | number)[] = ['brown', true, 40];

// can use a type alias to avoid having to write out definition multiple times - to be covered in later lessons
type Drink = (string | boolean | number)[];
const pepsiAlias: Drink = ['brown', true, 40];

