import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [guests, setGuests] = useState<string[]>([])

  const onClick = () => {
    setName('');
    // set a new array to state with old array values and new ones
    setGuests([...guests, name])
  }

  return <div>
    <h3>Guest list</h3>
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <ul>
      {guests.map(guest => <li key={guest}>{guest}</li>)}
    </ul>
    <button onClick={onClick}>Add Guest</button>
  </div>
}

export default GuestList;