// we can use a decorator on class properties/methods/accessors
/// class below has one of each properties/methods/accessors
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // syntax for declarator function definition
  /// requires experimentalDecorators & emitDecoratorMetadata TS options enabled
  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

// syntax for base decorator function
/// first argument is the prototype of the object, second argument is the key of the property on the object, third argument is the property descriptor
function testDecorator(target: any, key: string): void {
  // logs the Class.prototype object, which has access to properties/methods/accessors
  console.log('Target:', target);
  // logs the key of the method next to the decorator
  console.log('Key:', key);
}