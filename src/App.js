import React, { Component } from "react";
import Articles from "./components/Articles";

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        Hello World!
        <br></br>
        <Articles />
      </div>
    );
  }
}

export default App;
