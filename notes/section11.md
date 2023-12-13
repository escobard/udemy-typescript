# section 11 - ts re-usable code

## node standard lib and ts
- libraries such as `fs` and `path` require @types/node library

## enum
- short for enumeration
- an object that stores some closely related values
- can be used to improve readability
- follows near-identical syntax rules as normal objects
- creates an object with the same keys and values when converted fro-m ts to js
- primary goal is to signal to other engineers that these are all closely related values
- use whenever we have a small fixed set of values that are all closely related and known at compile time
  - enum has to be populated at compile time, cannot be populated during run time
  - for example, enum values cannot come from a network request

## generics
- like function arguments, but for types in class/function definitions
- allows us to define the type of a property/argument/return value at a future point
- use heavily when writing re-usable code
- allows for the creation of re-usable function arguments, which can de-couple functions/classes from strong type definitions, nice!

### inheritance vs composition styles
- inheritance - is a relationship between two classes
  - eg, we have two classes that are related, one class (parent/abstract) defines re-usable methods that children can use/extend
  - makes the most sense when there is a logical relationship between parent and child, which reduces code duplication
    - changing relationships and dependencies is difficult, so if changing relationships or dependencies might be a future use case, avoid inheritance approach
  - does not make sense when creating a logical relationship increases code duplication / sprawl
- composition - has a relationship between class and outside object
  - eg, we have one class, that relies on an interface/class type as the constructor 
  - second class depends on a class that matches the interface/class definition, as a constructor
  - makes the most sense when there is not a logical relationship between classes/functions, but a lot of code is being duplicated
    - changing relationships is easy, since inheritance/class definitions can be swapped out easily without a major refactor to the underlying code
  - does not make sense to use when logical relationship between classes/functions decreases code duplications/sprawl

#### typescript - inheritance or composition?
- "composition over inheritance" - a famous quote from the book "Design Patterns - Elements of re-usable OO software" for OOP design paradigms that created a holy war in the typescript community 
  - the book encourages "delegation" - leveraging existing objects/classes to improve re-usability, without creating another class.
    - In other words, in true "composition" design, a class can inherit properties from other class, to improve re-use
    - This is the pattern we want to follow with typescript!
    - Composition - one object(class) has a reference to another object(class)
- the term "composition" is highly misunderstood in the JS community, when you hear "composition", remember how it was defined in this course!
  - "composition" should apply to class based designs only.
  - "composition" should not be followed to create artificial inheritance between functions, it should be used primarily with classes!
    - do not buy into the industry nonsense of using functions for composition + delegation design
    - avoid multiple inheritance from functions! functions should be de-coupled from classes as much as possible