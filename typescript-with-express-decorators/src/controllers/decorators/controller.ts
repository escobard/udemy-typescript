import 'reflect-metadata';
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller(routePrefix: string) {
  // applies generic Function type to target, which expects the constructor property of a class
  return function(target: Function): void {

    // calls express router instance from AppRouter class
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      // assumes every method in the controller class manages a route / is a route handler
      const routeHandler = target.prototype[key];

      // tries to see if method key has the path metadata key
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      // tries to see if method key has the method metadata key
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key)

      // checks to see if the method key has the path metadata key
      if (path) {
        // assigns route path and route handler function to express.Router.get
        /// router[method] - this approach has a TS error, since TS does not know the type of method
        //// can fix by using an enum as a type for methods, which the type definition for express picks up and defines to the correct function type
        router[method](`${routePrefix}${path}`, routeHandler)
      }
    }
  }
}