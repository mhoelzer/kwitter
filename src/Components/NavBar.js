import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <NavLink exact to="/" activeClassName="activeLink">Login</NavLink>
                <br />
                <NavLink exact to="/register" activeClassName="activeLink">Register</NavLink>
                <br />
                <NavLink exact to="/messages" activeClassName="activeLink">Messages</NavLink>
            </React.Fragment>
        );
    };
};

export default NavBar;