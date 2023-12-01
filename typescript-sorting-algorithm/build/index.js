"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// numbers sorting
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 20, -32]);
// sorter now expects an instance of numbersCollection class as constructor argument
numbersCollection.sort();
console.log('array sorting:', numbersCollection.data);
// characters sorting
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log('string sorting:', charactersCollection.data);
// linkedlist sorting
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
