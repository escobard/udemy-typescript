import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    // expects constructor to have a .read(), as defined in DataReader interface
    /// invokes reader.read() to retrieve data from file
    this.reader.read()
    /// reader.data now has the file's data and can be mapped through
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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
    })
  }

  // tells readFileSync how to parse each value in each row

}