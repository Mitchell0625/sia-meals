import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/subcomponents/Header";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
