import React from 'react';

class TextArea extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this
            .handleChange
            .bind(this);

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div className="input-group">
                <span className="default-text-label">{this.props.label}</span>
                <textarea
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    type="text"
                    className="default-textarea"/>
            </div>
        );
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState(() => {
            return {value};
        });
    }
}

export default TextArea;
