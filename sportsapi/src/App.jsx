import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import LeagueDetails from "./components/leagueDetails";
import Soccer from "./components/soccer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <Switch>
            <Route
              path="/england/:id"
              render={(props) => <LeagueDetails {...props} />}
            />
            <Route path="/england" render={(props) => <Soccer {...props} />} />
            <Redirect from="/" exact to="/england" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
