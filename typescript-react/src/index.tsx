import ReactDOM from 'react-dom/client';

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement!)

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  )
}

root.render(<App />)