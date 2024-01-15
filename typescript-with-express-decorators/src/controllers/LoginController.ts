import { Request, Response } from "express";

// we want to create a class declarator for the prefix/parent route path for the controller
// @controller('/')
class LoginController {

  // we want to create a decorator for the route path
  // @get('/login')
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