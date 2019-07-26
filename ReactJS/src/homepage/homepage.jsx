import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class Homepage extends Component {
    render () {
        return (
            <div className="homepage-wrapper">
                <div className="homepage">
                    <div className="text-wrapper">
                        <div className="text name">
                            Brendan Kelley
                        </div>
                        <div className="text category">
                            <NavLink
                                className="text-route"
                                to="/resume">
                                Resume
                            </NavLink>
                        </div>
                        <div className="text category">
                            <NavLink
                                className="text-route"
                                to="/about-me">
                                About me
                            </NavLink>
                        </div>
                        <div className="text category">
                            <NavLink
                                className="text-route"
                                to="/projects">
                                Projects
                            </NavLink>
                        </div>
                        <div className="text category">
                            <NavLink
                                className="text-route"
                                to="/resume">
                                Music
                            </NavLink>
                        </div>
                    </div>
                    <div className="avatar-wrapper">
                        <img
                            className="avatar"
                            src={ require('../assets/portland-pic-cropped.png') } />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Homepage);
