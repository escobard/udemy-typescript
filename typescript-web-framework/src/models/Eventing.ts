type Callback = () => void;

export class Eventing {
  events: {
    // sample type annotation for a key string type
    /// each object has a key that contains an array of Callback functions
    [key: string]: Callback[]
  } = {}

  // expects a callback function, so a function invocation to be passed
  /// type annotation is a big confusing, so extracting into ts alias Callback
  on = (eventName: string, callback: Callback) => {
    const handlers = this.events[eventName] || []// Callback[] or undefined
    handlers.push(callback)
    this.events[eventName] = handlers;
  }

  // expects an existing eventName, then calls all the subscribed events
  /// arrow functions always bound this. to the child class (not the parent class), big gotcha!
  //// for this reason, it is recommended to use arrow functions whenever this. is reference in a class method that must be called by a parent class
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0){
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }
}