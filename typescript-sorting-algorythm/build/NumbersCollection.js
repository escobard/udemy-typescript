"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    // get allows the reference of length without invoking a function
    // eg, collection.length instead of collection.length()
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
