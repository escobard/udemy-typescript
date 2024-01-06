import { UserForm } from './views/UserForm'
import { User } from './models/User'

const user = User.buildUser({ name: 'NAME', age: 20 })

// pass in the parent element identifier, which UserForm uses to render HTML within
const userForm = new UserForm(document.getElementById('root'), user)

userForm.render()