import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className="container">
            <h1>Hello! from Car Sales</h1>
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
