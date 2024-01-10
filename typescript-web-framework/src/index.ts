import { UserEdit } from './views/UserEdit'
import { User } from './models/User'

const user = User.buildUser({ name: 'NAME', age: 20 })

// pass in the parent element identifier, which UserForm uses to render HTML within
const root = document.getElementById('root')
if (root) {
  const userEdit = new UserEdit(root, user)
  userEdit.render()
  console.log(userEdit)
} else {
  throw new Error('Root element is not found')
}


