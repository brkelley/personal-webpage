import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHiking, faDrum, faDumbbell, faMusic, faMapPin, faGuitar } from '@fortawesome/free-solid-svg-icons';
import aboutMeData from '../assets/data/about-me.json';
import MapContainer from './map-container/map-container.jsx';
import toPairs from 'lodash/toPairs';

class AboutMe extends Component {
    constructor (props) {
        super(props);

        this.state = {
            aboutMeData
        }

        this.renderQuickDetails = this.renderQuickDetails.bind(this);
        this.renderHobbiesList = this.renderHobbiesList.bind(this);
    }

    renderHobbiesList () {
        const faIcons = { faHiking, faDrum, faDumbbell, faMusic, faMapPin, faGuitar };
        return (
            <div className="section-content hobbies-content">
                <div className="hobbies-photo-wrapper">
                    <img
                        className="hobbies-photo"
                        src={ require('../assets/about-me-photos/mewithglades.jpg') } />
                </div>
                <div className="hobbies-list">
                    {this.state.aboutMeData.hobbies.map(hobby => {
                        return (
                            <div
                                className="hobby-wrapper"
                                key={hobby.title}>
                                <div className="hobby-icon">
                                    <FontAwesomeIcon
                                        icon={faIcons[hobby.class]}
                                        size="lg" />
                                </div>
                                <div className="hobby-list-item">
                                    {hobby.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderQuickDetails () {
        const { quickDetails } = this.state.aboutMeData;
        const quickDetPairs = toPairs(quickDetails);
        return (
            <div className="quick-details-wrapper">
                {quickDetPairs.map(pair => {
                    return (
                        <div
                            className="quick-details-key-value"
                            key={pair[0]}>
                            <div className="quick-details-label">
                                {pair[0]} //
                            </div>
                            <div className="quick-details-value">
                                {pair[1]}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    renderMap () {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }

    render () {
        return (
            <div className="about-me-wrapper">
                <div className="main-content-wrapper">
                    <div className="information-wrapper">
                        <div className="about-title">
                            ABOUT ME
                        </div>
                        {this.renderQuickDetails()}
                    </div>
                    <div className="photo-wrapper">
                        <img
                            className="about-me-photo"
                            src={ require('../assets/portland-pic-cropped.png') } />
                    </div>
                </div>
                <div className="about-me-section">
                    <div className="section-title">
                        synopsis
                    </div>
                    <div className="section-content bio-content">
                        {this.state.aboutMeData.biography}
                    </div>
                </div>
                <div className="about-me-section">
                    <div className="section-title">
                        what i like to do
                    </div>
                    {this.renderHobbiesList()}
                </div>
                <div className="about-me-section">
                    <div className="section-title">
                        places i've traveled
                    </div>
                    <div className="section-content map-content">
                        <MapContainer points={this.state.aboutMeData.traveling} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
