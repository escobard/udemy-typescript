import { Model } from "./Model";

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

}