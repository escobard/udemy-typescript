import { Router, Request, Response } from "express";

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

router.post('/login', (req: Request, res: Response) => {
  // using TS with middlewares is challenging, since middlewares do not have deep information on exactly what types are in use / will be returned
  /// there are no TS errors on the line before, even if bodyParser is enabled or disabled since req.property is by default allowed, marked as an any type
  //// whoever wrote the express type definitions assumed bodyParser would be in place!!! that is why TS allows req.body
  const { email, password } = req.body;

  res.send(email + password);
})

export { router }