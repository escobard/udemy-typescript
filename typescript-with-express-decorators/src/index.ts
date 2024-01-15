import express from 'express';
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from 'cookie-session';

// imports the express router initiated in the controller declarator
import { AppRouter } from "./AppRouter";
// imports the LoginController class for the controllerRouter to apply
import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['some-string']}))
app.use(router)
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('Listening on port 3000');
})