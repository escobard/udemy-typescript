import axios, {AxiosResponse} from 'axios';

import { Eventing } from "./Eventing";

// act as a browser cache to store data from api
/// can pass multiple generics
export class Collection<T, K> {

  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    // allows to dynamically change the data of the Collection class as needed
    /// in this case, takes UserProps json object and creates User class from it
    public deserialize: (json: K) => T
  ){}


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
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      })

      // huge gotcha - trigger event has to happen in the .then chain or interface will not be updated once data is fetched!
      this.trigger('change')
    })
  }
}