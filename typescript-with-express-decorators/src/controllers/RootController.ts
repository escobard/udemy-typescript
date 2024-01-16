import {NextFunction, Request, Response} from "express";
import { get } from "./decorators/routes";
import { controller } from "./decorators/controller";
import { use } from "./decorators/use";

// middleware to check if user is authenticated
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    // next() is a callback that does not return anything
    next();
    return
  }

  res.status(403);
  res.send('Not permitted');
}


// calling controller decorator with an empty string since the root route has no path prefix
@controller('')
export class RootController {
  @get('/')
  getRoot(req: Request, res: Response){
    if (req.session && req.session.loggedIn){
      res.send(`
          <div>
            <div>You are logged in</div>
            <a href="/auth/logout">Logout</a>
          </div>
        `)
    } else {
      res.send(`
         <div>
            <div>You are not logged in</div>
            <a href="/auth/login">Login</a>
          </div>
        `)
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response){
    res.send('Welcome to protected route logged in user')
  }
}