export class Attributes<T extends object> {
  // good to extract deep nested type annotations into an interface
  /// eg, { name: string; age: number } to UserProps interface
  constructor(private data: T){}
  // retrieves data from this.data by using propName key as argument
  /// you can use generics with function definitions too, syntax below
  //// T[K] passes in the K generic into the T generic - K must contain a key that exists in T to work
  ///// once a valid T key is passed into K, the type value attached to the key will be returned
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key]
  }
  set(update: T): void {
    // adds new object to this.data
    /// copies new object properties over to original object
    Object.assign(this.data, update);
  }

}