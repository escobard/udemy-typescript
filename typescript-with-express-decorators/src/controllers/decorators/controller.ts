import 'reflect-metadata';
import { AppRouter } from "../../AppRouter";

export function controller(routePrefix: string) {
  // applies generic Function type to target, which expects the constructor property of a class
  return function(target: Function): void {

    // calls express router instance from AppRouter class
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      // assumes every method in the controller class manages a route / is a route handler
      const routeHandler = target.prototype[key];

      // tries to find method key has the path metadata key
      const path = Reflect.getMetadata('path', target.prototype, key);

      // checks to see if the method key has the path metadata key
      if (path) {
        // assigns route path and route handler function to express.Router.get
        router.get(`${routePrefix}${path}`, routeHandler)
      }
    }
  }
}