import express from 'express';
import bodyParser from "body-parser";
import cookieSession from 'cookie-session';

// imports the express router initiated in the controller declarator
import { AppRouter } from "./AppRouter";
// imports the LoginController class for the controllerRouter to apply
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['some-string']}))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('Listening on port 3000');
})