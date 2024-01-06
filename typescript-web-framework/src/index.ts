import { UserForm } from './views/UserForm'

// pass in the parent element identifier, which UserForm uses to render HTML within
const userForm = new UserForm(document.getElementById('root'))

userForm.render()