// we can use a decorator on class properties/methods/accessors
/// class below has one of each properties/methods/accessors
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // syntax for declarator function definition
  /// requires experimentalDecorators & emitDecoratorMetadata TS options enabled
  @logError
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

// syntax for base decorator function
/// first argument is the prototype of the object, second argument is the key of the property on the object, third argument is the property descriptor
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  // attaches the function body to const method
  const method = desc.value;

  // defines another value to the function, intercepting call to the original method
  /// original method is still runs as expected
  desc.value = function () {
    try {
      method();
    } catch(e){
      console.log('Oops boat was sunk')
    }
  }
}

new Boat().pilot()