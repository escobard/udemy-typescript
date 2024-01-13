// defines generic as an argument for the function itself, used to define type definition within the class
class HoldAnything<TypeOfData> {
  constructor(public data: TypeOfData) {}
}

// how to initiate a class with a generic type
/// <number> argument passes the number as type parameter for the class
const holdNumber = new HoldAnything<number>(1);

/// now has variable type checking for the class.data constructor!
holdNumber.data = 'asdfa';