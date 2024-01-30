import React from 'react';
import ReactDom from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDom.createRoot(el!)

interface AppProps {
  color: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0};
  onIncrement = (): void => {
    this.setState({counter: this.state.counter + 1});
  }
  onDecrement = (): void => {
    this.setState({counter: this.state.counter - 1});
  }
  render(){
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    )
  }
}

root.render(<App color="red"/>);