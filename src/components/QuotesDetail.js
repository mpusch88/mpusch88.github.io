import React from 'react';
import Sidebar from './Sidebar';

class QuotesDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='sidebar-general'>
                    <Sidebar/>
                </div>

                <div className='main-content'>
                    <span className='login-sub-title'>
                        Quotes Detail
                    </span>
                </div>
            </div>
        );
    }
}

export default QuotesDetail;
