import React from 'react';
import Sidebar from './Sidebar';

class Fixed extends React.Component {
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
                        Fixed Fee Jobs Overview
                    </span>
                </div>
            </div>
        );
    }
}

export default Fixed;
