class Sorter {
  // shorthand to assign a variable to the class via the constructor
  constructor(public collection: number[] | string){}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i< length; i++){
      // - i assumes rightmost element will be in the right position
      for (let j = 0; j < length - i - 1; j++){

        // this is known as a typeguard, only executing if block if this.collection is an array
        /// instanceof operator is required for any other type of value that is not a primitive type
        /// instanceof operator can be used to check for custom types & interfaces
        if (this.collection instanceof Array){
          // below only works if collection is an array
          if (this.collection[j] > this.collection[j + 1]) {
            // refers to the left element of each pair
            const leftElement = this.collection[j];
            // take old value on the right and throw it on the left
            this.collection[j] = this.collection[j+1];
            // take new value and throw it to the right hand side
            this.collection[j+1] = leftElement;
          }
        }

        //below only works if collection is a string
        /// typeof operator is required for primitive types - number, string or boolean
        if (typeof this.collection === 'string'){

        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0, 20, -32]);
sorter.sort();
console.log(sorter.collection);