import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

// creates a tuple to define an array with a specific order of types
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
  }
}