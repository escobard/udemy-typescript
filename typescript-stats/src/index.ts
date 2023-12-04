// grabs csv file and parses its content to a string
import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('football.csv')
reader.read()

// basic enum syntax
/// can be referred to just like an object - eg, MatchResult.HomeWin
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`);