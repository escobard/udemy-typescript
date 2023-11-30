import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 20, -32])
// sorter now expects an instance of numbersCollection class as constructor argument
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data);