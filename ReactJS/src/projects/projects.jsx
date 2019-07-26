import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

export default class Projects extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            dropdownHeight: 0,
            currentProject: 'Personal Webpage'
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderProjectDropdown = this.renderProjectDropdown.bind(this);
        this.onDropdownSelection = this.onDropdownSelection.bind(this);
    }

    toggleDropdown () {
        const { dropdownHeight } = this.state;
        this.setState({ dropdownHeight: dropdownHeight === 0 ? 'auto' : 0 });
    }

    handleClick (e) {
        if (this.state.dropdownHeight === 0 || this.menu.contains(e.target) || this.trigger.contains(e.target)) return;
        this.toggleDropdown();
    }

    componentWillMount () {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount () {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    onDropdownSelection (selected) {
        this.setState({ currentProject: selected });
        this.toggleDropdown();
    }

    renderProjectDropdown () {
        const { dropdownHeight } = this.state;
        const chevronClass = `dropdown-caret${dropdownHeight === 'auto' ? ' dropdown-open-caret' : ''}`;

        return (
            <div className="project__dropdown">
                <div
                    className="dropdown-trigger"
                    ref={trigger => this.trigger = trigger}
                    onClick={() => this.toggleDropdown()}>
                    <span className="dropdown-trigger-text">{this.state.currentProject}</span>
                    <div className={chevronClass}>
                        <i data-feather="chevron-down"></i>
                    </div>
                </div>
                <AnimateHeight
                    duration={150}
                    height={dropdownHeight}
                    className="dropdown-menu">
                    <div ref={menu => this.menu = menu}>
                        <div
                            className="dropdown-menu-item"
                            onClick={() => this.onDropdownSelection('Personal Webpage')}>
                            Personal Webpage
                        </div>
                        <div
                            className="dropdown-menu-item"
                            onClick={() => this.onDropdownSelection('Fitness App')}>
                            Fitness App
                        </div>
                        <div
                            className="dropdown-menu-item"
                            onClick={() => this.onDropdownSelection('Team Homepage')}>
                            Team Homepage
                        </div>
                    </div>
                </AnimateHeight>
            </div>
        );
    }

    render () {
        return (
            <div className="project-wrapper">
                <div className="project__title">
                    {this.renderProjectDropdown()}
                </div>
            </div>
        );
    }
}
