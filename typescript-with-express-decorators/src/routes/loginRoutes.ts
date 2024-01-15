import { Router, Request, Response, NextFunction } from "express";

// to fix / override type file definitions when needed, we can define an interface that extends the type definition in question
/// this is an example of approach #1 of adapting ts to libraries, adding basic type annotations where possible
interface RequestWithBody extends Request {
  // in this case, extending Request with an interface to ensure the Request.body object has the expected type properties
  /// this workaround fixes the any type declaration for Request.body
  body: { [key: string]: string | undefined }
}

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

const router = Router()

router.post('/login', (req: RequestWithBody, res: Response): void => {
  // using TS with middlewares is challenging, since middlewares do not have deep information on exactly what types are in use / will be returned
  /// there are no TS errors on the line before, even if bodyParser is enabled or disabled since req.property is by default allowed, marked as an any type
  //// whoever wrote the express type definitions assumed bodyParser would be in place!!! that is why TS allows req.body
  const { email, password } = req.body;

  if (email && password && email ==='hi@hi.com' && password ==='password'){
    // log this person in
    /// creates a session with a cookie, express & cookie-session manage all session management with browser cookies
    req.session = { loggedIn: true}

    // redirect them to the root route
    res.redirect('/')
  } else {
    res.status(422);
    res.send('You must provide an email and a password');
  }

});

// not best practice but useful to get things going for now
router.get('/', (req: RequestWithBody, res: Response): void => {
  if (req.session && req.session.loggedIn){
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
     <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `)
  }
})

router.get('/logout', (req: RequestWithBody, res: Response): void => {
  // this clears the cookie from the server
  req.session = undefined
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response): void => {
  res.send('Welcome to protected route logged in user')
})

export { router }