import fs from "fs";

// TODO - can be re-used to read csv files in the future!
/// marks class as abstract, or as a blueprint for other classes to follow
/// <T> argument marks the expected type as a generic
//// this is a common design pattern for typescript functions & classes
export abstract class CsvFileReader<T> {

  // marks mapRow function as a required method that must be initialized by child class
  abstract mapRow(row: string[]): T;

  data: T[] = [];
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
      .map(this.mapRow);
  }

}