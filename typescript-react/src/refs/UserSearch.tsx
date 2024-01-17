import { useState, useRef } from 'react';

const users = [
  { name: 'Sarah', age: 20},
  { name: 'Alex', age: 20},
  { name: 'Michael', age: 20},
]

const UserSearch: React.FC = () => {
  // refs require a type annotation and an initial value to work with TS
  const inputRef = useRef<HTMLInputElement | null >(null);

  const [name, setName] = useState('')
  // adds a generic type to react state
  const [user, setUser] = useState<{name: string, age: number} | undefined>()

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    })

    setUser(foundUser)
  }

  return <div>
    User Search
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
      {user && user.name}
      {user && user.age}
    </div>
  </div>
}

export default UserSearch;