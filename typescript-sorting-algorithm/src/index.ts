import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from './CharactersCollection'

// numbers sorting
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 20, -32])
// sorter now expects an instance of numbersCollection class as constructor argument
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log('array sorting:', numbersCollection.data);

// characters sorting
const charactersCollection =  new CharactersCollection('Xaayb');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log('string sorting:', charactersCollection.data)