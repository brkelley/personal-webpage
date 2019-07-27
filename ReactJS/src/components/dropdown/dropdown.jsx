import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

export default class Dropdown extends Component {
    constructor (props) {
        super(props);

        this.state = {
            dropdownHeight: 0,
            selectedValue: {key: 'placeholder', label: 'Select a project'},
            options: props.options,
            onSelect: this.props.onSelect
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.onDropdownSelection = this.onDropdownSelection.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderDropdownOptions = this.renderDropdownOptions.bind(this);
    }

    toggleDropdown () {
        const { dropdownHeight } = this.state;
        this.setState({ dropdownHeight: dropdownHeight === 0 ? 'auto' : 0 });
    }

    onDropdownSelection (selected) {
        this.setState({ selectedValue: selected });
        this.state.onSelect(selected);
        this.toggleDropdown();
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

    renderDropdownOptions () {
        return this.state.options.map(option => {
            return (
                <div
                    className="dropdown-menu-item"
                    key={option.key}
                    onClick={() => this.onDropdownSelection(option)}>
                    {option.label}
                </div>
            )
        });
    }

    render () {
        const { dropdownHeight } = this.state;

        return (
            <div className="dropdown-wrapper">
                <div
                    className="dropdown-trigger"
                    ref={trigger => this.trigger = trigger}
                    onClick={this.toggleDropdown}>
                    <span className="dropdown-trigger-text">{this.state.selectedValue.label}</span>
                </div>
                <AnimateHeight
                    duration={150}
                    height={dropdownHeight}
                    className="dropdown-menu">
                    <div ref={menu => this.menu = menu}>
                        {this.renderDropdownOptions()}
                    </div>
                </AnimateHeight>
            </div>
        );
    }
}
