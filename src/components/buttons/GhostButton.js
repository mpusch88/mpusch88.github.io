import React from 'react';

class GhostButton extends React.Component {
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
                <button onClick={this.handleClick} className={('button-big-ghost overflow noselect')}>
                    <span>
                        {this.props.children}
                    </span>
                </button>
            </div>
        );
    }
}

export default GhostButton;
