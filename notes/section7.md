# section 7 - interfaces

## ts interfaces
- creates a new type, describing the property names and value types of an object
  - custom type, defined by the developer
  - can be used to facilitate re-usability, minimize lines of code & improve readability 
- encourages simplified functions, since Interfaces & other type annotations take care of most functional error checks
  - this is known as interface gatekeeping

### ts interface gatekeeping
- the general strategy for reusable code in TS
- create functions that accept arguments that are typed with interfaces
- object/classes can decide to 'implement' a given interface to work with a function
- interface protects function to only work with specific kind of objects