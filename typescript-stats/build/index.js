"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// types must be defined for all imported libraries to avoid ts errors
const fs_1 = __importDefault(require("fs"));
// grabs csv file and parses its content to a string
const matches = fs_1.default.readFileSync('./sampleData/football.csv', {
    // tells readFileSync what kind of content we will expect from the file
    /// returns a string from the file's content
    encoding: 'utf-8'
})
    // tells readFileSync how to identify each row of data
    .split('\n')
    // tells readFileSync how to parse each line of data
    .map((row) => {
    return row.split(',');
});
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man united' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
