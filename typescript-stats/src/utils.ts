// in TS, we use functions for generic use cases like utils
/// converting a date to a string doesn't have much to do with reading a csv file, and is a pretty specific, unrelated use case
export const dateStringToDate = ( dateString: string): Date => {
  // splits array values from csv file into an array of numbers
  /// 28/10/2018 > [28, 10, 2018]
  const dateParts = dateString
    .split('/')
    .map((value: string): number => {
      return parseInt(value);
    })
  // returns year / month (-1 because month starts at 0 / day
  return new Date(dateParts[2], dateParts[1] -1, dateParts[0] )
}