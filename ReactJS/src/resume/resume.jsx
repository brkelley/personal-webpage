import React, { Component } from 'react';
import ResumeNavbar from './resume-navbar/resume-navbar.jsx';
import ResumeDetails from './resume-details/resume-details.jsx';
import resumeData from '../assets/data/resume.json';
import camelCase from 'lodash/camelCase';

class Resume extends Component {
    constructor (props) {
        super(props);
        const { contactInformation, knownLanguages, education, professionalExperience, otherExperience } = resumeData;

        this.state = {
            activeSection: 'full-time',
            contactInformation,
            partTime: professionalExperience.filter(el => el.type === 'part-time'),
            fullTime: professionalExperience.filter(el => el.type === 'full-time'),
            internship: professionalExperience.filter(el => el.type === 'internship')
        };

        this.onSectionChange = this.onSectionChange.bind(this);
    }

    onSectionChange (activeSection) {
        this.setState({ activeSection });
    }

    render () {
        return (
            <div className="resume-wrapper">
                <ResumeNavbar
                    contactInfo={this.state.contactInformation}
                    activeSection={this.state.activeSection}
                    onSectionChange={this.onSectionChange} />
                <ResumeDetails sectionData={this.state[camelCase(this.state.activeSection)]} />
            </div>
        )
    }
}

export default Resume;
