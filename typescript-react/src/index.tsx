import ReactDOM from 'react-dom/client';
import GuestList from "./state/GuestList";

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement!)

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  )
}

root.render(<App />)