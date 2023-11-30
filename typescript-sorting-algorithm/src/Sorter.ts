import { NumbersCollection } from "./NumbersCollection";

// example of how to use interfaces as a type guard, to improve re-usability
/// also creates a blueprint of sorts that children classes or constructor objects must follow to leverage the sorter class
/// the blueprint can be used by developers to build their own sorters that work with the Sorter class
interface Sortable {
  length: number;
  // name of the arguments do not have to match up, only the types do
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  // shorthand to assign a variable to the class via the constructor
  constructor(public collection: Sortable){}
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