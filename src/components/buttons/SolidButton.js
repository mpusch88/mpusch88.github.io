import React from 'react';

class SolidButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick() {
        if (typeof this.props.onClick !== 'undefined') {
            this
                .props
                .onClick();
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick}
                    className={this.props.size === 'small'
                    ? ('button-small-primary overflow')
                    : ('button-big-primary overflow')}>
                    <span>
                        {this.props.children}
                    </span>
                </button>
            </div>
        );
    }
}

export default SolidButton;
