"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 20, -32]);
// sorter now expects an instance of numbersCollection class as constructor argument
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data);
