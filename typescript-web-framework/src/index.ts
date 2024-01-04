import { User } from "./models/User";

// initiates function with an object that fits UserProps interface
const user = new User({ id: 1, name: 'newer name', age: 0 });

user.on('save', () => {
  console.log(user)
});

user.save()