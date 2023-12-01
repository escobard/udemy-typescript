"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// ts does not recognize children class methods and append them to parents
/// for this, we can use abstract classes
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            // i assumes rightmost element will be in the right position
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    // refers to the left element of each pair
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
