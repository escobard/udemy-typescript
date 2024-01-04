import { Eventing } from './Eventing'
import { Sync } from "./Sync"

export interface UserProps{
  // name? syntax marks properties as optional in ts
  /// UserProps interface requirements are met if one or the other property is passed
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  // good to extract deep nested type annotations into an interface
  /// eg, { name: string; age: number } to UserProps interface
  constructor(private data: UserProps){}
  // retrieves data from this.data by using propName key as argument
  get(propName: string): (number | string) {
    return this.data[propName]
  }
  set(update: UserProps): void {
    // adds new object to this.data
    /// copies new object properties over to original object
    Object.assign(this.data, update);
  }

}

// inject dynamic type interface into User class
/// eg, let user = new User<UserProps>()