import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-outer">
                <div className="header-title">{this.props.title}</div>
                <div className="header-subtitle">{this.props.subtitle}</div>
                <div className="header-buttons">{this.props.children}</div>
            </div>
        );
    }
}

export default Header;
