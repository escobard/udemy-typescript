import { Router, Request, Response } from "express";

// to fix / override type file definitions when needed, we can define an interface that extends the type definition in question
/// this is an example of approach #1 of adapting ts to libraries, adding basic type annotations where possible
interface RequestWithBody extends Request {
  // in this case, extending Request with an interface to ensure the Request.body object has the expected type properties
  /// this workaround fixes the any type declaration for Request.body
  body: { [key: string]: string | undefined }
}

const router = Router()

router.get('/login', (req: Request, res: Response): void => {
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
  `)
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  // using TS with middlewares is challenging, since middlewares do not have deep information on exactly what types are in use / will be returned
  /// there are no TS errors on the line before, even if bodyParser is enabled or disabled since req.property is by default allowed, marked as an any type
  //// whoever wrote the express type definitions assumed bodyParser would be in place!!! that is why TS allows req.body
  const { email, password } = req.body;

  if (email && password){
    res.send(email + password);
  } else {
    res.status(422);
    res.send('You must provide an email and a password');
  }

})

export { router }