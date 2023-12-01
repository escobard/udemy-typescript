import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from "./LinkedList";

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

// linkedlist sorting
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const linkedSorter = new Sorter(linkedList)
linkedSorter.sort();
linkedList.print();