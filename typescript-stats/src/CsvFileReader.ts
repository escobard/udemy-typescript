import fs from "fs";

// TODO - can be re-used to read csv files in the future!
export class CsvFileReader {
  data: string[][] = [];
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
  }
}