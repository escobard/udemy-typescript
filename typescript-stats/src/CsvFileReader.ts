import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

// creates a tuple to define an array with a specific order of types
type MatchData = [Date, string, string, number, number, MatchResult, string];

// TODO - can be re-used to read csv files in the future!
export class CsvFileReader {

  data: MatchData[] = [];
  constructor(public filename: string){}

  read(): void {

    this.data = fs.readFileSync(this.filename, {
      // tells readFileSync what kind of content we will expect from the file
      /// returns a string from the file's content
      encoding: 'utf-8'
    })
      // tells readFileSync how to identify each row of data
      .split('\n')
      // tells readFileSync how to parse each line of data
      .map((row: string): string[] => {
        // splits each row with a comma
        return row.split(',')
      })
      // tells readFileSync how to parse each value in each row
      .map((row: string[]): MatchData => {
        // returns an array for each row
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          // converts string to number
          parseInt(row[3]),
          // converts string to number
          parseInt(row[4]),
          // apply enum to MatchResult type
          row[5] as MatchResult,
          row[6]
        ]
      });
  }
}