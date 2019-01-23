import React from 'react';

class SelectItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick() {
        this
            .props
            .select(this.props.value);
    }

    render() {
        let classes = 'select-item noselect';
        if (this.props.isSelected) {
            classes += ' selected';
        }

        return (
            <div onClick={this.handleClick} className={classes}>{this.props.text}</div>
        );
    }
}

export default SelectItem;
