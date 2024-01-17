import ReactDOM from 'react-dom/client';
import UserSearch from "./state/UserSearch";

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement!)

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  )
}

root.render(<App />)