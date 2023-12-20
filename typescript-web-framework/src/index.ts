import { User } from "./models/User";

const user = new User({ name: 'Dan', age: 33})

user.set({name: 'new name', age: 999})

user.on('change', () => {
  console.log('Change #1')
})

user.on('change', () => {
  console.log('Change #2')
})

user.on('save', () => {
  console.log('Save was triggered')
})

user.trigger('change');