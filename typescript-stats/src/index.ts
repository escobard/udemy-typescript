// types must be defined for all imported libraries to avoid ts errors
import fs from 'fs';

// grabs csv file and parses its content to a string
const matches = fs.readFileSync('./sampleData/football.csv', {
  // tells readFileSync what kind of content we will expect from the file
  /// returns a string from the file's content
  encoding: 'utf-8'
})
// tells readFileSync how to identify each row of data
  .split('\n')
// tells readFileSync how to parse each line of data
  .map((row: string): string[] => {
    return row.split(',')
})
console.log(matches)