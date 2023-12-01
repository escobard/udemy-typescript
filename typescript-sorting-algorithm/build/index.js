"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// numbers sorting
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 20, -32]);
// sorter now expects an instance of numbersCollection class as constructor argument
const numbersSorter = new Sorter_1.Sorter(numbersCollection);
numbersSorter.sort();
console.log('array sorting:', numbersCollection.data);
// characters sorting
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const charSorter = new Sorter_1.Sorter(charactersCollection);
charSorter.sort();
console.log('string sorting:', charactersCollection.data);
// linkedlist sorting
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const linkedSorter = new Sorter_1.Sorter(linkedList);
linkedSorter.sort();
linkedList.print();
