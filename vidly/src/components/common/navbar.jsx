import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/" style={{ fontSize: '2rem' }}>Vidly</Link>
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
                            color: "#007bff"
                        }}>
                            Movies
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/customers" activeStyle={{
                            fontWeight: "bold",
                            color: "#007bff"
                        }}>
                            Customers
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/rentals" activeStyle={{
                            fontWeight: "bold",
                            color: "#007bff"
                        }}>
                            Rentals
                        </NavLink>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <NavLink className="nav-item nav-link" to="/login" activeStyle={{
                            fontWeight: "bold",
                            color: "#007bff"
                        }}>
                            Login
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/register" activeStyle={{
                            fontWeight: "bold",
                            color: "#007bff"
                        }}>
                            Register
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;