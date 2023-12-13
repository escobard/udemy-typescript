// two types of classes, very similar functionality with the only the collection type being different
class ArrayOfNumbers {
  constructor(public collection: number[]){}
  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }
  get(index: number): string {
    return this.collection[index]
  }
}

// can be condensed to a single class with the use of ts generics
/// uses a generic type T to replace static type
class ArrayOfAnything<T> {
  constructor(public collection: T[]){}
  get(index: number): T {
    return this.collection[index]
  }
}

// sample declaration with generic
new ArrayOfAnything<string>(['a', 'b', 'c'])

// type inference at play, since we are passing an array of strings, ts recognizes that as an allowed type!
/// allows you to avoid defining type argument for ArrayOfAnything class
const arr = new ArrayOfAnything(['a', 'b', 'c'])

// example of generics with functions
/// two functions that are highly dependent on the array type
function printStrings(arr: string[]): void {
  for (let i = 0; i< arr.length; i++){
    console.log(arr[i])
  }
}
function printNumbers(arr: number[]): void{
  for (let i = 0; i< arr.length; i++){
    console.log(arr[i])
  }
}

// using ts generics to make function re-usable
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i< arr.length; i++){
    console.log(arr[i])
  }
}

// function declaration with generic
/// recommended to add type annotation for generics, to improve readability and help serve as a typeguard
printAnything<string>(['a', 'b', 'c'])

// type inference works as well with functions
/// in this case it gives a warning, since printAnything should not return a value
let result = printAnything(['a', 'b', 'c'])

