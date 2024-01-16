import 'reflect-metadata';
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { Request, Response, NextFunction, RequestHandler } from "express";

// checks the required keys in the middleware
function bodyValidators(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction){
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    // if keys in the request do not match keys in argument, return an error
    for (let key of keys){
      if (!req.body[key]){
        res.status(422).send('Invalid request');
        return;
      }
    }
    next()
  }
}

export function controller(routePrefix: string) {
  // applies generic Function type to target, which expects the constructor property of a class
  return function(target: Function): void {

    // calls express router instance from AppRouter class
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      // assumes every method in the controller class manages a route / is a route handler
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key)|| [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key);

      // passes required body properties to a validator middleware
      const validator = bodyValidators(requiredBodyProps);

      // checks to see if the method key has the path metadata key
      if (path) {
        // builds route arguments to pass into express.Router
        /// router[method] - this approach has a TS error, since TS does not know the type of method
        //// can fix by using an enum as a type for methods, which the type definition for express picks up and defines to the correct function type
        router[method](
          // passes the parent + child route path to router
          `${routePrefix}${path}`,
          // passes all available middlewares to router
          ...middlewares,
          // passes validator to router - apparently express accepts validators as well as middlewares in route options
          validator,
          // passes actual route handler
          routeHandler
        )
      }
    }
  }
}