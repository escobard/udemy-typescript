# typescript

## what is typescript?
- essentially just JavaScript with a type system
  - my interpretation, this is a more "modern" version of proptypes
    - allows you to set strict coding rules & patterns
    - allows you to avoid the overhead of having to set proptypes for each component (in react)
    - allows you to set the expected types for node.js APIs (like proptypes for react)
- adds a bit more syntax to your course which applies the type system

## typescript's type system
- helps us catch errors during development
- uses type annotations to analyze our code
   - can be described as little comments that better describe our code
- only active during development
  - typescript is not present in live environments
    - not recognized by browsers or node.js
    - compiled version is what is executed by browsers / node.js
- doesn't provide any performance optimization
  - code is compiled to plain javascript prior to execution
  - compiling code to plain old javascript actually takes some time, making typescript's pre-deploy compilation an extra step in deployments
  - a pessimistic conclusion is that typescript actually makes code less performant because of the additional compilation step
- to view how typescript compiles to js, visit typescriptlang.org/play
- it is best to think of typescript as a friend who is sitting behind you while you are coding

## typescript implementation
- code just be compiled with 'tsc' package first before running applications
- once code is compiled, it can be run with node.js runtime as expected
- code can be compiled & then run with a single command using `ts-node`
- typescript helps ensure your code is using only the properties that are required
  - it takes extra time to define typescript limitations within the code
  - leveraging typescript should translate to cleaner code, if typescript is properly leveraged