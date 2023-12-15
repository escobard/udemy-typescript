
interface UserProps{
  // name? syntax marks properties as optional in ts
  /// UserProps interface requirements are met if one or the other property is passed
  name?: string;
  age?: number;
}
export class User {
  // good to extract deep nested type annotations into an interface
  /// eg, { name: string; age: number } to UserProps interface
  constructor(private data: UserProps){}
  // retrieves data from this.data by using propName key as argument
  get(propName: string): (number | string) {
    return this.data[propName]
  }
  set(update: UserProps): void {
    // copies new object properties over to original object
    Object.assign(this.data, update);
  }
}

// inject dynamic type interface into User class
/// eg, let user = new User<UserProps>()