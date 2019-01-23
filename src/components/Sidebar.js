import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { logout } from '../actions/userActions';
import SidebarLink from './SidebarLink';

class Sidebar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			quotesOverviewDropDownIsOpen:true,
			quotesDetailsDropDownIsOpen:false
		};

		this.doLogOut = this.doLogOut.bind(this);

		this.quotesOverviewToggleDropDown = this.quotesOverviewToggleDropDown.bind(this);
		this.quotesDetailsToggleDropDown = this.quotesDetailsToggleDropDown.bind(this);
	}

    doLogOut(e) {
        console.log('starting delete');
        this
            .props
            .dispatch(logout());
	}
	
	// componentDidMount(){
    //     this.setState(() => {
    //         return {isUpdating:true}
    //     });

    //     let pendingPromise = this.props.dispatch(getPendingJobs());
    //     let jobsPromise = this.props.dispatch(getMyJobs());
    //     let bidsPromise = this.props.dispatch(getMyBids());
    //     let convosPromise = this.props.dispatch(getConvos());

    //     Promise.all([jobsPromise,pendingPromise,bidsPromise,convosPromise]).then(() => {
    //         this.setState(() => {
    //             return {isUpdating:false}
    //         });
    //     });
    // }

	quotesOverviewToggleDropDown(){
		console.log(this.state.quotesOverviewDropDownIsOpen);
		this.setState(() => {
			return {quotesOverviewDropDownIsOpen: !this.state.quotesOverviewDropDownIsOpen};
		});
	}

	quotesDetailsToggleDropDown(){
		console.log(this.state.quotesDetailsDropDownIsOpen);
		this.setState(() => {
			return {quotesDetailsDropDownIsOpen: !this.state.quotesDetailsDropDownIsOpen};
		});
	}


	render(){
        return (
			<div>
				<div className="nav-side-container">
					<div className='sidebar-links-container'>
						<SidebarLink url='' link='/feed' hasDropDown={false}>
							Feed
						</SidebarLink>

						<SidebarLink url='' link='/quotes' hasDropDown={true} 
							dropDownIsOpen = {this.state.quotesOverviewDropDownIsOpen} 
							toggleDropDown = {this.quotesOverviewToggleDropDown}>
							Quotes - Overview
						</SidebarLink>

						<SidebarLink url='' link='/quotes/:id' hasDropDown={true}
							dropDownIsOpen={this.state.quotesDetailsDropDownIsOpen} 
							toggleDropDown = {this.quotesDetailsToggleDropDown}
							>
							Quotes - Detail
						</SidebarLink>

						<SidebarLink url='' link='/jobs' hasDropDown={false}>
							Jobs - Overview
						</SidebarLink>

						<SidebarLink url='' link='/jobs/:id' hasDropDown={false}>
							Jobs - Detail
						</SidebarLink>

						<SidebarLink url='' link='/fixed' hasDropDown={false}>
							Fixed Fee Jobs - Overview
						</SidebarLink>

						<SidebarLink url='' link='/fixed/:id' hasDropDown={false}>
							Fixed Fee Jobs - Detail
						</SidebarLink>

						<SidebarLink url='' link='/message' hasDropDown={false}>
							Messages
						</SidebarLink>

						<SidebarLink url='' link='/settings' hasDropDown={false}>
							Settings
						</SidebarLink>

						<SidebarLink url='' link='/login' hasDropDown={false} onClick={this.doLogOut}>
							Logout
						</SidebarLink>

					</div>
				</div>	
			</div>
        );
    }
}

// const mapStateToProps = (state) => {
//     let jobs = {};
//     let convos = {};
//     let messages = {};
//     let convoUsers = {};
//     let bids = {};
//     let activeUsers = {};
//     let quoteUsers = {};
//     let finishedUsers = {};
//     let unread = 0;

//     if(state.jobReducer.entities.jobs){
//         jobs = state.jobReducer.entities.jobs;
//         activeUsers = state.jobReducer.entities.users;
//     }

//     if(state.bidReducer.entities.bids){
//         bids = state.bidReducer.entities.bids;
//         quoteUsers = state.bidReducer.entities.users;
//     }

//     if(state.convoReducer.entities.convos){
//         convos = state.convoReducer.entities.convos;
        
//         Object.keys(convos).map((convoKey) => {
//             let convo = convos[convoKey];
//             if(convo.unread && convo.unread[state.userReducer.user._id]){
//                 unread += Object.keys(convo.unread[state.userReducer.user._id]).length;
//             }
//         })

//         messages = state.convoReducer.entities.messages;
//         convoUsers = state.convoReducer.entities.users;
//     }
//     return {
//         user:state.userReducer.user,
//         jobs,
//         convos,
//         unread,
//         messages,
//         convoUsers,
//         bids,
//         quoteUsers,
//         activeUsers,
//         finishedUsers,
//         users:state.jobReducer.entities.users
//     }
// }

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(Sidebar);

//wtf is this?
//export default withRouter(connect(mapStateToProps)(Sidebar));
