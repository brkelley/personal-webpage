import React, { Component } from 'react';
import floor from 'lodash/floor';

class ResumeNavbar extends Component {
    constructor (props) {
        super(props);

        this.onSectionChange = this.onSectionChange.bind(this);
        this.renderContactInfo = this.renderContactInfo.bind(this);
    }

    onSectionChange (newSection) {
        this.props.onSectionChange(newSection);
    }

    renderContactInfo () {
        const { address, city, abbrState, zipCode, phoneNumber } = this.props.contactInfo;
        const phoneNumString = '' + phoneNumber;
        const formattedPhoneNumber = `(${phoneNumString.substring(0, 3)}) ${phoneNumString.substring(3, 6)}-${phoneNumString.substring(6, 10)}`;
        
        return (
            <div className="contact-info">
                <span className="contact-info-item">{city}, {abbrState}</span>
                <span className="contact-info-item">{formattedPhoneNumber}</span>
            </div>
        );
    }

    render () {
        return (
            <div className="resume-navbar-wrapper">
                <img
                    className="resume-navbar__selfie"
                    src={ require('../../assets/brkelley-avatar-nohawk.png') } />
                {this.renderContactInfo()}
                <div
                    className={this.props.activeSection === 'full-time' ? 'active-section resume-navbar__label' : 'resume-navbar__label'}
                    onClick={() => this.onSectionChange('full-time')}>
                    Full-time
                </div>
                <div
                    className={this.props.activeSection === 'internship' ? 'active-section resume-navbar__label' : 'resume-navbar__label'}
                    onClick={() => this.onSectionChange('internship')}>
                    Internship
                </div>
                <div
                    className={this.props.activeSection === 'part-time' ? 'active-section resume-navbar__label' : 'resume-navbar__label'}
                    onClick={() => this.onSectionChange('part-time')}>
                    Part-time
                </div>
            </div>
        );
    }
}

export default ResumeNavbar;
