# section 9
- getting used to classes and interfaces in TS
- quickstart ts web app boilerplate with parcel-bundler

## parcel basics
- requires a index.html file
- index.html points to index.ts file

## ts design patterns class basics
- one class per file 
  - class files should start with a capital letter
- one class to represent entity that must be interacted with in some way
- usually do not want to use default statements for typescript
  - to keep all imports with {} brackets
- using interfaces allows you to re-use and de-couple (and still secure) argument definitions

## faker package
- https://github.com/faker-js/faker
- allows for the fake generation of lots of data
  - eg, firstname, company catchphrase, etc

## ts with js packages
- requires a typescript definition, so ts can check your code
- solved with type definition file for each package
- sometimes, the type definition file is automatically installed with the package
- usually, a type definition has been created already by the js community and can be installed with the project
  - these types are shared on definitely typed