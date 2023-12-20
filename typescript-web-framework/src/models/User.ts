
interface UserProps{
  // name? syntax marks properties as optional in ts
  /// UserProps interface requirements are met if one or the other property is passed
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {

  events: {
    // sample type annotation for a key string type
    /// each object has a key that contains an array of Callback functions
    [key: string]: Callback[]
  } = {}
  // good to extract deep nested type annotations into an interface
  /// eg, { name: string; age: number } to UserProps interface
  constructor(private data: UserProps){}
  // retrieves data from this.data by using propName key as argument
  get(propName: string): (number | string) {
    return this.data[propName]
  }
  set(update: UserProps): void {
    // copies new object properties over to original object
    Object.assign(this.data, update);
  }

  // expects a callback function, so a function invocation to be passed
  /// type annotation is a big confusing, so extracting into ts alias Callback
  on(eventName: string, callback: Callback){
    const handlers = this.events[eventName] || []// Callback[] or undefined
    handlers.push(callback)
    this.events[eventName] = handlers;
  }

  // expects an existing eventName, then calls all the subscribed events
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0){
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }
}

// inject dynamic type interface into User class
/// eg, let user = new User<UserProps>()