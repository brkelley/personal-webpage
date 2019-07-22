import React, { Component } from 'react';
import moment from 'moment';

class ResumeNavbar extends Component {
    constructor (props) {
        super(props);

        this.renderDetailsHeader = this.renderDetailsHeader.bind(this);
        this.renderResponsibilitiesList = this.renderResponsibilitiesList.bind(this);
        this.renderTechnologies = this.renderTechnologies.bind(this);
    }

    renderDetailsHeader (section) {
        const { title, company, startDate, endDate } = section;
        const startDateFormatted = moment(startDate).format('MMMM YYYY');
        let endDateFormatted = endDate;
        if (endDate !== 'Present') {
            endDateFormatted = moment(endDate).format('MMMM YYYY');
        }

        return (
            <div className="details__header">
                <div className="details__header-item details__header-item-title">
                    {title}
                </div>
                <div className="details__header-item details__header-item-subtitle">
                    {company}
                </div>
                <div className="details__header-item details__header-item-subtitle details__header-item-time-range">
                    {startDateFormatted} - {endDateFormatted}
                </div>
            </div>
        )
    }

    renderResponsibilitiesList (section) {
        return (
            <div className="details__responsibilities-list">
                <ul>
                    {section.responsibilities.map((responsibility, index) => {
                        return (
                            <li
                                className="responsibility-item"
                                key={index}>
                                {responsibility}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    renderTechnologies (section) {
        return (
            <div className="details__technologies">
                {section.technologies.map((technology, index) => {
                    return (
                        <div
                            className="details__technology-wrapper"
                            key={index}>
                            {technology}
                        </div>
                    )
                })}
            </div>
        )
    }

    render () {
        return (
            <div className="details-wrapper">
                {this.props.sectionData.map((section, index) => {
                    return (
                        <div
                            className="details__section-wrapper"
                            key={index}>
                            {this.renderDetailsHeader(section)}
                            {this.renderResponsibilitiesList(section)}
                            {this.renderTechnologies(section)}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ResumeNavbar;
