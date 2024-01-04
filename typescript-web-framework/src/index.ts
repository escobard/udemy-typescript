import { User } from "./models/User";

// initiates function with an object that fits UserProps interface
const user = new User({ name: 'new record', age:0 });

user.events.on('change', () => {
  console.log('test event!')
})