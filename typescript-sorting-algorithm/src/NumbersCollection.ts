import { Sorter } from './Sorter';

// children classes are bound to the methods from the abstract parent class
export class NumbersCollection extends Sorter {
  constructor(public data: number[]){
    super()
  }

  // get allows the reference of length without invoking a function
  // eg, collection.length instead of collection.length()
  /// get allows you to define the type for this function as a number, instead of a function
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // performs check to see if bubble sort swap should occur
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    // performs bubble sort swap
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}