import { User } from "./User";
import { Eventing } from "./Eventing";


export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  // if initializing a function with static declarators (not as constructor arguments), we have to use the get syntax instead of function = this.child.function
  get on(){
    return this.events.on;
  }
}