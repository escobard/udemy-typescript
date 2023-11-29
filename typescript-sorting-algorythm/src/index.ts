class Sorter {
  // short hand to assign a variable to the class via the constructor
  constructor(public collection: number[]){}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i< length; i++){
      // - i assumes rightmost element will be in the right position
      for (let j = 0; j < length - i - 1; j++){
        if (this.collection[j] > this.collection[j + 1]) {
          // refers to the left element of each pair
          const leftElement = this.collection[j];
          // take old value on the right and throw it on the left
          this.collection[j] = this.collection[j+1];
          // take new value and throw it to the right hand side
          this.collection[j+1] = leftElement;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);