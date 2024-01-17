import ReactDOM from 'react-dom/client';
import EventComponent from './events/EventComponent'

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement!)

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  )
}

root.render(<App />)