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

// ts does not recognize children class methods and append them to parents
/// for this, we can use abstract classes
export abstract class Sorter {
  // marking methods that must exist during class initiation
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void
  abstract length: number;
  sort(): void {
    const { length } = this;

    for (let i = 0; i< length; i++){
      // i assumes rightmost element will be in the right position
      for (let j = 0; j < length - i - 1; j++){
        if (this.compare(j, j+1)) {
          // refers to the left element of each pair
          this.swap(j, j + 1)
        }
      }
    }
  }
}