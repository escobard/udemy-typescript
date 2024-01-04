import { AxiosResponse } from "axios";

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

  // allows for invocation of the on method from events, from the User class, without calling this.events.on() function directly
  /// get prefix allows for calling a function without actually having to invoke it or pass arguments
  /// get functions do not require type declarations
  get on(){
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }
  get get(){
    return this.attributes.get;
  }
  set(update: UserProps): void {
    this.attributes.set(update);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      // call this.set from the parent class instead of attributes.set, since we want to trigger a change update
      /// interesting use case, sometimes it is best to call the child class directly, but not here
      this.set(response.data);
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((): void => {
        this.trigger('save');
      })
      .catch((): void => {
        this.trigger('error');
      });

  }
}

// inject dynamic type interface into User class
/// eg, let user = new User<UserProps>()