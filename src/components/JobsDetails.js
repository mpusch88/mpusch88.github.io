import React from 'react';
import Sidebar from './Sidebar';
import BillingComponent from './PriceBreakdown';

class JobsDetails extends React.Component {
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
                        Job Detail
                    </span>
                    <BillingComponent/>
                </div>
            </div>
        );
    }
}

export default JobsDetails;
