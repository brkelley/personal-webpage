import React, { Component } from 'react';
import projectData from '../assets/data/projects.json';
import Dropdown from '../components/dropdown/dropdown.jsx';
import get from 'lodash/get';

export default class Projects extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            dropdownHeight: 0,
            currentProject: null,
            projects: projectData
        }

        this.onSelect = this.onSelect.bind(this);
        this.renderProjectDetails = this.renderProjectDetails.bind(this);
        this.renderLookingPoints = this.renderLookingPoints.bind(this);
        this.renderLogos = this.renderLogos.bind(this);
    }

    onSelect (selected) {
        const currentProject = this.state.projects.find(el => el.id === selected.key);
        this.setState({ currentProject });
    }

    renderProjectDetails () {
        if (this.state.currentProject) {
            const currProject = this.state.currentProject;
            return (
                <div className="project__details-wrapper">
                    <div className="project__technologies-logos-wrapper">
                        {this.renderLogos()}
                    </div>
                    <div className="project__full-description">
                        {currProject.description}
                    </div>
                    <div className="project__auxiliary-details">
                        <div className="project__simple-details">
                            <div className="project__primary-language">
                                <span className="language-label">Language:</span>
                                <span className="language-value">
                                    {currProject.language}
                                </span>
                            </div>
                            <div className="project__github-link-wrapper">
                                <a href={currProject.link}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        {this.renderLookingPoints()}
                    </div>
                </div>
            );
        }
    }

    renderLookingPoints () {
        return (
            <div className="project__key-notes">
                <div className="key-notes-title">
                    Features to look for
                </div>
                <ul>
                    {this.state.currentProject.lookPoints.map(look => {
                        return <li key={look}>{look}</li>;
                    })}
                </ul>
            </div>
        );
    }
    
    renderLogos () {
        const { technologies } = this.state.currentProject;
        return technologies.map(technology => {
            return (
                <div
                    className="tech-logo-wrapper"
                    key={technology.label}>
                    <img
                        className="tech-logo"
                        src={require(`../assets/technology-logos/${technology.icon}`)} />
                </div>
            )
        });
    }

    render () {
        const dropdownValues = this.state.projects.map(project => {
            return { label: project.project, key: project.id };
        });

        return (
            <div className="project-wrapper">
                <div className="project__selector-wrapper">
                    <div className="project__dropdown-wrapper">
                        <Dropdown
                            options={dropdownValues}
                            onSelect={this.onSelect} />
                    </div>
                    <div className="project__snippet">
                        {get(this.state.currentProject, 'snippet', '')}
                    </div>
                </div>
                {this.renderProjectDetails()}
            </div>
        );
    }
}
