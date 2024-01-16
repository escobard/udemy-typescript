import { Request, Response } from "express";

import { get } from './decorators/routes';
import { controller } from "./decorators/controller";

// we want to create a class declarator for the prefix/parent route path for the controller
@controller('/auth')
export class LoginController {

  // we want to create a decorator that passes the route's path to the method
  @get('/login')
  // we might want to add middlewares to each of our routes in the future, can leverage decorators
  // @use(middleware)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
          <div>
              <label>Email</label>
              <input name="email" />
          </div>
          <div>
              <label>Password</label>
              <input name="password" type="password"/>
          </div>
          <button>Submit</button>
      </form>
    `);
  };
}