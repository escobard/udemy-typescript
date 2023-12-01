# section 10 - ts design patterns continued
- build a single sorting algorythm, make it re-usable for many different types of sorting
- implement strong interface and class inheritance to simplify solution
- build an app that can run directly with the node.js terminal
- establish base design pattern for modular typescript apps
  - use tsconfig.ts file
- after code is compiled, you can check that the compiled code works with node.js by running `node build/index.js`
- interfaces are useful because we define a contract between one class and another
  - the class that leverages the interfaces must follow the rules of the interface
  - this is another way of managing inheritance beyond parent / child classes

## tsc commands
- `tsc - w` - compiles all code continuously

## concurrently shorthands
- script `concurrently npm:start:*` - grabs & runs all scripts that have 'start' in their name

## bubble sort algorithm
- double nested forloop that iterates through collection of data several times 
- every iteration it considers each pair of data
- if the element on the left is greater than the element on the right, bubble sort swaps the order of the elements
- sorts collection elements from lowest to highest, left to right

## string immutability
- strings allow individual character seeing with string[0] like arrays
- strings cannot be mutated like arrays - cannot change string[0] = 'newvalue'

## typeguard
- clarifies the type of value the code works with

## abstract classes 
- TS looks at every class in isolation to ensure that it works independently
- This can cause weird errors when calling children functions from a parent class
- abstract class rules:
  - can't be used to create an object directly
  - only used as a parent class
  - can contain real implementation for some methods
  - the implemented methods can refer to other methods that don't actually exist yet
  - can make child classes promise to implement some other method

### when to use abstract classes?
- when a single class must be initiated, but functionality from multiple classes is needed on initiation
- child initiates parent class constructors on initiation
- child must contain the abstract methods defined by the parent class to initiate the parent class

### interfaces vs classes
- interfaces:
  - setup a contract between different classes or functions
  - use when we have very different objects that we want to work together
  - promotes loose coupling, by leveraging the interface as the "gateway" for the code
- abstract classes
  - sets up a contract between different classes 
  - use when we are trying to build up a definition of an object
  - strongly couples classes together
- takeaways - if the object to be consumed by many classes is very similar, class inheritance is preferred. If the object to be consumed by many classes or functions is different but has similar types, use an interface. to review
  - interfaces - similar objects with different purposes
    - eg, in the google maps exercise a user vs a company can be bound to an interface to create the type gateway
    - want to first try to use interfaces for code re-use, unless there is a use case where objects are really closely related, in this case you can use classes
  - abstract classes - defining a very similar and related object that should be used my multiple classes.