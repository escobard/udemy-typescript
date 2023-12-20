import { User } from "./models/User";

// initiates function with an object that fits UserProps interface
const user = new User({ id: 1 });

user.fetch()