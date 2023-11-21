# section 3 - type annotations and inference

## type annotation
- code we add to tell typescript what type of value a variable will refer to
- we (developers) tell typescript the type

## type inference 
- typescript tries to figure out what type of value a variable refers to
- typescript guesses the type
- any time a new variable is created, two seperate steps have to be done:
  - variable declaration - name the variable - eg, const color
  - variable initiation - give a value to a variable - eg, const color = 'red';
- if declaration and initialization are on the same line, TS will figure out the type of color for us
- in this course, type inference will be used as much as possible
  - in other words, type annotations will not be used for EVERY DAMN THING
  - instead, type annotations should be used when:
    - we declare a variable on one line then initialize it later
    - when we want a variable to have a type that can't be inferred
    - when a function returns any type and we need to clarify the value