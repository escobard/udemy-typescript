import { AxiosPromise, AxiosResponse } from "axios";

// interfaces are recommended to make the Model class more re-usable in the future
interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

// can use an interface to extend a generic model with additional types T must contain
export interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  // in JS, assigning arguments as variables in the constructor, assigns them to .this before any methods
  /// assigning values in the constructor body, assigns them to .this after a method! this can cause errors, big gotcha
  constructor(private attributes: ModelAttributes<T>, private events: Events, private sync: Sync<T>){}

  // allows for invocation of the on method from events, from the User class, without calling this.events.on() function directly
  /// get prefix allows for calling a function without actually having to invoke it or pass arguments
  /// get functions do not require type declarations
  on = this.events.on;

  // syntax abbreviated with the js class shorthand function = value
  /*  get trigger(){
      return this.events.on;
    }*/
  trigger = this.events.trigger;

  get = this.attributes.get;

  set(update: T): void {
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