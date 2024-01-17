const EventComponent: React.FC = () => {
  // a trick when it is not clear what types to use, look at the type the library EXPECTS and use that type
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  return <div>
    <input onChange={onChange} />
  </div>
}

export default EventComponent