
interface UserProps{
  name: string;
  age: number;
}
export class User {
  // good to extract deep nested type annotations into an interface
  /// eg, { name: string; age: number } to UserProps interface
  constructor(private data: UserProps){}
  // retrieves data from this.data by using propName key as argument
  get(propName: string): (number | string) {
    return this.data[propName]
  }
}

// inject dynamic type interface into User class
/// eg, let user = new User<UserProps>()