export class Attributes<T extends object> {
  constructor(private data: T){}
  // retrieves data from this.data by using propName key as argument
  get(propName: string): (number | string) {
    return this.data[propName]
  }
  set(update: T): void {
    // adds new object to this.data
    /// copies new object properties over to original object
    Object.assign(this.data, update);
  }

}