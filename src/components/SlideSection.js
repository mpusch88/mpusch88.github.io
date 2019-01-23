import React from "react";

class SlideSection extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this
            .handleClose
            .bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.open && !this.props.open) {
            //document.body.removeAttribute('style');
            document
                .body
                .classList
                .remove('slide-section');
        }
    }

    componentWillUnmount() {
        //document.body.removeAttribute('style');
        document
            .body
            .classList
            .remove('slide-section');
    }

    handleClose() {
        this
            .props
            .close();
    }

    render() {
        let classes = "slide-component-container";
        let screenClasses = "slide-component-screen";

        if (this.props.open) {
            classes += " open";
            screenClasses += " open";

            //document.body.setAttribute('style','overflow:hidden !important');
            document
                .body
                .classList
                .add('slide-section');
        }
        return (
            <div>
                <div onClick={this.handleClose} className={screenClasses}></div>
                <div className={classes}>
                    <div className="slide-component-close">
                        <i
                            onClick={this.handleClose}
                            className={this.props.white
                            ? ("slide-component-close-icon white material-icons")
                            : ("slide-component-close-icon material-icons")}>
                            close
                        </i>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SlideSection;
