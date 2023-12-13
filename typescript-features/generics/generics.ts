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