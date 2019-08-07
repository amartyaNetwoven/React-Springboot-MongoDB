import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";

class NavItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to={`/`}>CMS</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={`/`}><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/create`}> <i className="fa fa-plus" aria-hidden="true"></i> Add Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/users`}> <i className="fa fa-user" aria-hidden="true"></i> Add Users</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" onClick={() => window.location.pathname = "/logout"}>
                            Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default NavItem;
