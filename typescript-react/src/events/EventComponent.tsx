const EventComponent: React.FC = () => {
  // a trick when it is not clear what types to use, look at the type the library EXPECTS and use that type
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement> ) => {
    console.log(event)
  }

  return <div>
    <input onChange={onChange} />
    <div draggable onDragStart={onDragStart}>Drag me!</div>
  </div>
}

export default EventComponent