import React from 'react';
import LoaderInline from './ButtonLoaderInline';

class AsyncButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };
        this.handleClick = this
            .handleClick
            .bind(this);

        this.timer = this
            .timer
            .bind(this);
    }

    timer() {
        this.setState({isLoading: true});

        setTimeout(() => {
            this.setState({isLoading: false});
        }, 2000);
    }

    handleClick(e) {
        e.preventDefault();
        this.timer();

        // if (!this.props.isLoading) {this.props.onClick();}
    }

    render() {
        return (this.state.isLoading
            ? <LoaderInline/>
            : (
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
            ));
    }
}

export default AsyncButton;
