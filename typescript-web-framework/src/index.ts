import { User } from "./models/User";

const user = new User({ name: 'Dan', age: 33})

user.set({name: 'new name', age: 999})

console.log(user.get('name'))
console.log(user.get('age'))