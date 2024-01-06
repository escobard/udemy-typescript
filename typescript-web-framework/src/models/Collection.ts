import axios, {AxiosResponse} from 'axios';

import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";

// act as a browser cache to store data from api
export class Collection {

  constructor(public rootUrl: string){}

  models: User[] = [];
  events: Eventing = new Eventing();

  // if initializing a function with static declarators (not as constructor arguments), we have to use the get syntax instead of function = this.child.function
  get on(){
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }

  fetch(): void {
    // loop through all available users and save them to the collection
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: UserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      })
    })
    this.trigger('change')
  }
}