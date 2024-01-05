import { Model } from "./Model";
import { Attributes } from './Attributes';
import { ApiSync} from './ApiSync';
import { Eventing } from './Eventing'

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
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

}