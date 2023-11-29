# section 10 - ts design patterns continued
- build a single sorting algorythm, make it re-usable for many different types of sorting
- implement strong interface and class inheritance to simplify solution
- build an app that can run directly with the node.js terminal
- establish base design pattern for modular typescript apps
  - use tsconfig.ts file
- after code is compiled, you can check that the compiled code works with node.js by running `node build/index.js`

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