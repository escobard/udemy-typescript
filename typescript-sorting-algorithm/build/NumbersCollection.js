"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
// children classes are bound to the methods from the abstract parent class
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // get allows the reference of length without invoking a function
    // eg, collection.length instead of collection.length()
    /// get allows you to define the type for this function as a number, instead of a function
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        // performs check to see if bubble sort swap should occur
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        // performs bubble sort swap
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
