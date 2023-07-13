import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    Syllabus
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/linux">
                                Linux
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/django">
                                Django
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/web">
                                Web
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
