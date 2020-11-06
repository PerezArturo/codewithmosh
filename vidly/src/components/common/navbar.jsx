import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";

class NavBar extends Component {
  render() {
    const { user } = this.props;
    return (
      <AppBar position="static" style={{ background: "#fff" }} elevation={0}>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Link className="navbar-brand" to="/" style={{ fontSize: "2rem" }}>
              <Typography variant="h6">Vidly</Typography>
            </Link>
            <NavLink
              className="nav-item nav-link"
              to="/movies"
              activeStyle={{
                fontWeight: "bold",
                color: "#007bff",
              }}>
              Movies
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/customers"
              activeStyle={{
                fontWeight: "bold",
                color: "#007bff",
              }}>
              Customers
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/rentals"
              activeStyle={{
                fontWeight: "bold",
                color: "#007bff",
              }}>
              Rentals
            </NavLink>
          </Box>
          {!user && (
            <React.Fragment>
              <NavLink
                className="nav-item nav-link"
                to="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#007bff",
                }}>
                Login
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/register"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#007bff",
                }}>
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink
                className="nav-item nav-link"
                to="/profile"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#007bff",
                }}>
                {user.name}
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/logout"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#007bff",
                }}>
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
