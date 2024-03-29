import { NextFunction, Request, Response } from "express";

import { get, post } from './decorators/routes';
import { controller } from "./decorators/controller";
import { use } from "./decorators/use";
import { bodyValidator } from "./decorators/bodyValidator";


function logger(req: Request, res: Response, next: NextFunction){
  console.log('Request was made!!!');
  next();
}

// we want to create a class declarator for the prefix/parent route path for the controller
@controller('/auth')
export class LoginController {

  // we want to create a decorator that passes the route's path to the method
  @get('/login')
  @use(logger)
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

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email ==='hi@hi.com' && password ==='password'){
      req.session = { loggedIn: true}

      // redirect them to the root route
      res.redirect('/')
    } else {
      res.status(422);
      res.send('You must provide an email and a password');
    }

  };

  @get('/logout')
  getLogout(req: Request, res: Response){
    req.session = undefined
    res.redirect('/');
  };

}