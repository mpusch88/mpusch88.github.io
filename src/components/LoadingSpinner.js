import React from 'react';
import {css} from 'react-emotion';
import {GridLoader} from 'react-spinners';

const override = css `
display: block;
margin: 0 auto;
border-color: red;
`;

class LoadingSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className='login-loader'>
                <GridLoader
                    className={override}
                    sizeUnit={'px'}
                    size={20}
                    color={'#008e80'}
                    loading={this.state.loading}/>
            </div>
        );
    }
}

export default LoadingSpinner;
