# what are ts decorators?
- functions that can be used to modify/change/anything different properties/methods in the class
- ts decorators are not the same as js decorators
- used inside of classes only
- understanding the order in which decorators are ran is key to understanding them
- ts declarators require experimentalDecorators & emitDecoratorMetadata TS options enabled

## decorators on property, method or accessor
- first argument is the prototype of the object 
- second argument is the key of the property on the object
- third argument is the property descriptor
  - object that has configuration options for properties on another object
  - can be used to determine how class methods can behave
  - has writable flag, determine if property can be changed
  - enumerable flag, determine if property can be looper through
  - value, current value
  - configurable, definition can be changed and property can be deleted
- decorators are applied only once (when the class is created)
  - not when an instance of a class is created