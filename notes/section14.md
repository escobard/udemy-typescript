# TS with Libraries
- not much javascript relies purely on classes following OOP!
  - this is because class based JS was not as popular 5-10 years ago
  - onset of TS has changed this paradigm where classes and OOP are preferred with JS/TS
- this is why integrating TS with popular JS libs can be challenging

## three approaches to integrating ts with js libraries
1. use lib normally, adding in basic type annotations where possible:
   - instructor recommends to stick to this approach unless:
     - approach #2 can be trusted (as is and over time) and significantly enhances dev experience or type safety with minimal effort
     - approach #3:
       - requires significant amount of effort, maintenance and documentation,
       - if approach #2 cannot be trusted / is not ideal for the use case
       - significantly enhances dev experience or type safety with minimal effort
   - aside:
      - this is how I have seen TS used mostly!!! half ass way of leveraging TS
      - mostly defines functional parameters and return types
      - does not leverage types from the library, often have to define custom types to get the lib to work
2. use TS adapter library that has helpers for using your lib with TS
   - type-graphql is a great example of this
   - with express, ts-express-decorators exist to facilitate express and ts integration
3. Twist your lib to work with TS classes
    - least ideal and most extreme
    - when these use cases come up, consider NOT using TS and waiting until an adapter library is released
    - if completely necessary, caution against this approach due to it's hacky nature, and high possibility of having to be retired for adapter libraries in the future
- the course will focus on approach 3 and 2, approach 1 has been covered already with prior lessons

### twist your lib to work with TS classes
- cons:
  - type definition files alone can't express what is going on in the JS world accurately (example: middleware)
  - type definition files provided to use aren't always accurate
  - inputs to a server (or any program with external inputs) are not guaranteed to exist, or be of the correct type
- pros:
  - addressing these type issues with typescript can force us to write better code

#### how / when should we twist JS lib to work with TS or in a class based approach?
- there must be at least one of two positive outcomes to this refactor:
  - either get better type safety (help TS identify errors more easily)
  - significantly enhance developer experience
- easy option - stick a bunch of library code into classes
  - can be done easily but requires heavy maintenance and in house context to work with
  - NOT the recommended approach to twist JS libraries to work with TS
  - this code is not easier to understand or to write 
    - because it requires knowledge of the custom class and the JS libraries
- hard option - stick a bunch of library code into classes + use some advanced features of TS
  - this option should yield at least one of the two positive benefits listed above
  - requires the use of decorators
  - a lot of TS helper libraries (approach #2) build TS declarators to make TS / JS lib integration easier and more readable 

## app overview
- basic login page with authentication
- basic protected page with authorization
  - shows denied if the user is not logged in 
- leveraging approach #3, doing our best to twist the library to work with TS

# TS compiles into TS prototype system
- JavaScript does not have actual classes!
- JS compiles class code into functional code that can be run on the browser
  - write some code on typescriptlang.org/play
  - copy the transpiled code to the browser console and play around!
- prototype is where all JS methods are attached to 
- methods can be added to the prototype even after class object has been created - this is unique to JS!
- 