import 'reflect-metadata';

export function controller(routePrefix: string): {} {
  // applies generic Function type to target, which expects the constructor property of a class
  return function(target: Function): void {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      // checks to see if the method key has the path metadata key
      const path = Reflect.getMetadata('path', target.prototype, key);
    }
  }
}