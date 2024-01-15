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
function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}