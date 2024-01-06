import { Model } from "./Model";
import { Attributes } from './Attributes';
import { ApiSync} from './ApiSync';
import { Eventing } from './Eventing'
import { Collection } from "./Collection";

export interface UserProps{
  // name? syntax marks properties as optional in ts
  /// UserProps interface requirements are met if one or the other property is passed
  name?: string;
  age?: number;
  id?: number;
}

// URL to JSON server
const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {

  // build a user object from the required parameters inherited from parent class Model
  /// static functions can be used to initiate a class
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

  // allows to abstract Collection class creation through User class,
  /// can create User collection with const collection = User.buildUserCollection();
  //// instead of the nasty const collection = new Collection<User, UserProps>(rootUrl, (json:UserProps) => User.buildUser(json))
  static buildUserCollection(): Collection<User, UserProps> {
    // creates new collection passing dynamic generics User and UserProps
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json))
  }

  // can then build other static build functions and swap out the three arguments, like data sources, such as
  /*
    static buildLocalUser(attrs: UserProps): User {
          return new User(
          new Attributes<UserProps>(attrs),
          new Eventing(),
          // fetches data from local storage instead of ApiSync's json server
          new LocalSync<UserProps>(rootUrl)
    )

    }
   */

}