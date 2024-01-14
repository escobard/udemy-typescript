// need a type definition file to work with express and ts
/// reminder that most libraries need a companion type definition to work with TS
//// in extreme cases, libraries do not have TS types and we have to build our own
import express, { Request, Response } from 'express';
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";

const app = express();

// important to ask - how far into TS do we want to go
/// it is recommended to maximize TS usage by specifying at least argument and return types, variable types can be inferred
/*
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
        <h1>Hi there!</h1>
    </div>
  `)
})
*/

// required so json content from form can be parsed and used by express
/// TS uses body parser to add a Request.body property to express's Request object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)

app.listen(3000, () => {
  console.log('Listening on port 3000');
})