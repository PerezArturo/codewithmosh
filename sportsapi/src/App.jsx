import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Soccer from "./components/soccer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="container mt-5">
          <Switch>
            <Route path="/soccer" render={(props) => <Soccer {...props} />} />
            <Redirect from="/" exact to="/soccer" />
          </Switch>
        </main>
      </React.Fragment>
      // <div className="container">
      //   <h1 className="text-center font-weight-bold mt-5">Sports App</h1>
      // </div>
    );
  }
}

export default App;
