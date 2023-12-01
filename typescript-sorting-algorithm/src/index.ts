import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from "./LinkedList";

// numbers sorting
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 20, -32])
// sorter now expects an instance of numbersCollection class as constructor argument
numbersCollection.sort();
console.log('array sorting:', numbersCollection.data);

// characters sorting
const charactersCollection =  new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log('string sorting:', charactersCollection.data)

// linkedlist sorting
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();