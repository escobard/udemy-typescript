import React from 'react';
import ReactDom from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDom.createRoot(el!)

interface AppProps {
  color: string;
}

class App extends React.Component<AppProps> {
  render(){
    return <div>{this.props.color}</div>
  }
}

root.render(<App color="red"/>);