// we can use a decorator on class properties/methods/accessors
/// class below has one of each properties/methods/accessors
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // syntax for declarator function definition
  /// requires experimentalDecorators & emitDecoratorMetadata TS options enabled
  @logError('Oops, boat was sunk in the ocean')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

// syntax for base decorator function
/// first argument is the prototype of the object, second argument is the key of the property on the object, third argument is the property descriptor
// function logError(target: any, key: string, desc: PropertyDescriptor): void {
//   // attaches the function body to const method
//   const method = desc.value;
//
//   // defines another value to the function, intercepting call to the original method
//   /// original method is still runs as expected
//   desc.value = function () {
//     try {
//       method();
//     } catch(e){
//       console.log('Oops boat was sunk')
//     }
//   }
// }

// syntax for declarator function factory
/// essentially a higher order function, which passes additional arguments to declarator function
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    // attaches the function body to const method
    const method = desc.value;

    // defines another value to the function, intercepting call to the original method
    /// original method is still runs as expected
    desc.value = function () {
      try {
        method();
      } catch(e){
        console.log(errorMessage)
      }
    }
  }
}


new Boat().pilot()