// we can use a decorator on class properties/methods/accessors
/// class below has one of each properties/methods/accessors

// syntax to invoke a class decorator
@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // syntax for declarator function definition
  /// requires experimentalDecorators & emitDecoratorMetadata TS options enabled
  @logError('Oops, boat was sunk in the ocean')
  error(): void {
    throw new Error();
    console.log('swish');
  }

  // syntax to apply a ts parameter decorator
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    if (speed === 'fast'){
      console.log('swish')
    } else {
      console.log('nothing')
    }
  }
}

// syntax for a declarator used or a class definition / constructor
function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}


// syntax for declarator that changes a function's argument/parameter
/// each parameter has a key and index
/// used to identify the parameters that are being used in a function, use case is not totally clear yet
function parameterDecorator(target: any, key: string, index: number){
  console.log(key, index)
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

// syntax for decorator for class property
/// decorators for properties is very limited, since properties are not attached to JS prototypes
//// in other words, decorators cannot access the value of properties
function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key)
}

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


new Boat().pilot('slow', false)