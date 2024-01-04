import { Eventing } from './Eventing'
interface UserProps{
  // name? syntax marks properties as optional in ts
  /// UserProps interface requirements are met if one or the other property is passed
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  public events: Eventing = new Eventing();

  // good to extract deep nested type annotations into an interface
  /// eg, { name: string; age: number } to UserProps interface
  constructor(private data: UserProps){}

}

// inject dynamic type interface into User class
/// eg, let user = new User<UserProps>()