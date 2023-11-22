# section 5 - arrays in ts

## typed arrays
- arrays where each element is some consistent type of value
- ideally with TS, arrays children should all have the same value
- where ts is useful:
  - can do type inference when extracting values from array
  - can prevent us from adding incompatible values to an array
  - can get help with 'map', 'foreach', 'reduce' functions
  - flexible - arrays can still contain multiple different types