import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class TopNavbar extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="navbar-wrapper">
                <div className="navbar__contact">
                    <span
                        className="navbar__contact-detail navbar__name"
                        onClick={() => this.props.history.push('/')}>
                        Brendan Kelley
                    </span>
                    <span className="navbar__contact-detail navbar__email">
                        brendan.bebo.kelley@gmail.com
                    </span>
                </div>
                <div className="navbar__links">
                    <NavLink
                        className="navbar__link"
                        to="/resume"
                        exact
                        activeClassName="active-link">
                        Resume
                    </NavLink>
                    <NavLink
                        className="navbar__link"
                        to="/"
                        exact
                        activeClassName="active-link">
                        About me
                    </NavLink>
                    <NavLink
                        className="navbar__link"
                        to="/"
                        exact
                        activeClassName="active-link">
                        Projects
                    </NavLink>
                    <NavLink
                        className="navbar__link"
                        to="/"
                        exact
                        activeClassName="active-link">
                        Music
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default withRouter(TopNavbar);
