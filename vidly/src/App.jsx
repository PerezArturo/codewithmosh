import React from "react";
import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NavBar from './components/common/navbar';
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import MovieForm from "./components/movieform";
import Rentals from "./components/rentals";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container mt-3">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/404" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/404" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
