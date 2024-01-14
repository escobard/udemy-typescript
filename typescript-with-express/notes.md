# TS with Libraries
- not much javascript relies purely on classes following OOP!
  - this is because class based JS was not as popular 5-10 years ago
  - onset of TS has changed this paradigm where classes and OOP are preferred with JS/TS
- this is why integrating TS with popular JS libs can be challenging

## three approaches to integrating ts with js libraries
1. use lib normally, adding in basic type annotations where possible:
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