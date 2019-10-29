import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>Hello! from Car Sales</h1>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
