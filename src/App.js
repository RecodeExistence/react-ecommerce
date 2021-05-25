import React from "react";
import { Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import "./App.css";

const Hats = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hats} />
      </div>
    );
  }
}

export default App;
