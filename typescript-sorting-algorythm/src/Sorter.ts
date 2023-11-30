import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  // shorthand to assign a variable to the class via the constructor
  constructor(public collection: NumbersCollection){}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i< length; i++){
      // i assumes rightmost element will be in the right position
      for (let j = 0; j < length - i - 1; j++){
        if (this.collection.compare(j, j+1)) {
          // refers to the left element of each pair
          this.collection.swap(j, j + 1)
        }

      }
    }
  }
}