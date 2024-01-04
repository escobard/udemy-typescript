import { Eventing } from './Eventing'
import { Sync } from "./Sync"
import { Attributes } from "./Attributes";

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
  public attributes: Attributes<UserProps>;
  constructor(attrs: UserProps){
    this.attributes = new Attributes<UserProps>(attrs);
  }
}

// inject dynamic type interface into User class
/// eg, let user = new User<UserProps>()