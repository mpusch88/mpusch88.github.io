import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.check = this
            .check
            .bind(this);
    }

    check() {
        this
            .props
            .check(!this.props.checked);
    }

    render() {
        return (
            <div className="checkbox-container" onClick={this.check}>
                {this.props.checked
                    ? (
                        <i className="checkbox-icon material-icons">
                            check_box
                        </i>
                    )
                    : (
                        <i className="checkbox-icon material-icons">
                            check_box_outline_blank
                        </i>
                    )}
                <span className="checkbox-text noselect">
                    {this.props.text}
                </span>
            </div>
        );
    }
}

export default Checkbox;
