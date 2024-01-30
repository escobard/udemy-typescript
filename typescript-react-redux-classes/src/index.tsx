import React from 'react';
import ReactDom from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDom.createRoot(el!)

interface AppProps {
  color: string;
}
class App extends React.Component<AppProps> {
  // this is a simplified way of defining state in React classes
  /// this approach overrides the React type definition for AppProps, avoiding the need to define a ts interface
  //// it is good practice to pick on approach over the other, I prefer the interface approach for better readability
  state = { counter: 0 }

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