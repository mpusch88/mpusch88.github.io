import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../components/Login';
import QuotesOverview from '../components/QuotesOverview';
import QuotesDetail from '../components/QuotesDetail';
import Feed from '../components/Feed';
import SettingsMain from '../components/SettingsMain';
import JobsOverview from '../components/JobsOverview';
import JobsDetails from '../components/JobsDetails';
import Message from '../components/Message';
import Fixed from '../components/Fixed';
import FixedDetails from '../components/FixedDetails';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={Login} exact={true}/>
                    <Route path='/login' component={Login} exact={true}/>
                    <Route path='/feed' component={Feed} exact={true}/>
                    <Route path='/quotes' component={QuotesOverview} exact={true}/>
                    <Route path='/quotes/:id' component={QuotesDetail} exact={true}/>
                    <Route path='/settings' component={SettingsMain} exact={true}/>
                    <Route path='/jobs' component={JobsOverview} exact={true}/>
                    <Route path='/jobs/:id' component={JobsDetails} exact={true}/>
                    <Route path='/message' component={Message} exact={true}/>
                    <Route path='/fixed' component={Fixed} exact={true}/>
                    <Route path='/fixed/:id' component={FixedDetails} exact={true}/>
                </Switch>
            </div>
        );
    }
}

export {AppRouter as default};
