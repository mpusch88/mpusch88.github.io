import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import AsyncButton from './buttons/AsyncButton';
import GhostButton from './buttons/GhostButton';
import SolidButton from './buttons/SolidButton';

class SettingsMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className='sidebar-general'>
                    <Sidebar/>
                </div>

                <div className='main-content'>

                    Settings
                    <i>aka button test</i>

                    <div>
                        <SolidButton>Async</SolidButton>
                    </div>

                    <div>
                        <GhostButton>Async</GhostButton>
                    </div>

                    <div>
                        <AsyncButton>Async</AsyncButton>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {};
};

export default connect(mapStateToProps)(SettingsMain);
