import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Vidly</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/movies" activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>
                            Movies
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/customers" activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>
                            Customers
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/rentals" activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>
                            Rentals
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;