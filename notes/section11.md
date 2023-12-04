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
  - 