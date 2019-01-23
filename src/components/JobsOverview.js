import React from 'react';
import Sidebar from './Sidebar';

class JobsOverview extends React.Component {
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
                        Job Overview
                    </span>
                </div>
            </div>
        );
    }
}

export default JobsOverview;
