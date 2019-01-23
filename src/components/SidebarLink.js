import React from 'react';
import SidebarSubItem from './SidebarSubItem'
import {Link} from 'react-router-dom';

class SidebarLink extends React.Component {
	constructor(props){
        super(props);
        
	}

	render(){
        let user = {
            firstName: 'First',
            lastName: 'Last'
        }

        return (
            <div className="sidebar-link-container" onClick={this.props.toggleDropDown}>        
                <Link className={ (this.props.url === this.props.link) ? ("sidebar-link noselect active") : ("sidebar-link noselect")} 
                    to={this.props.link}> 
                        {this.props.children}
                        {this.props.hasDropDown && (
                            <i className="sidebar-link-dropdown-icon material-icons">
                                {this.props.dropDownIsOpen ? ("keyboard_arrow_down") : ("keyboard_arrow_right")}
                            </i> 
                        )}
                </Link> 
                {this.props.hasDropDown && (
                    <div className={this.props.dropDownIsOpen ? ("sidebar-dropdown") : ("sidebar-dropdown open")}>
                        {/* {Object.keys(this.props.users).map((userKey,index) => {
                            let user = this.props.users[userKey];
                            if(userKey !== this.props.user._id){
                                return (
                                    <SidebarSubItem
                                        key={userKey}
                                        send={this.quoteClick}
                                        sendUser={this.usersQuotesClick}
                                        userId={userKey}
                                        bids={this.props.bids}
                                        title={user.firstName + ' ' + user.lastName}
                                        type={this.props.type}
                                        id={this.props.id}
                                    />
                                );
                            }
                        })} */}
                        {this.props.dropDownIsOpen && (
                            <SidebarSubItem
                                // key={userKey}
                                // send={this.quoteClick}
                                // sendUser={this.usersQuotesClick}
                                // userId={userKey}
                                // bids={this.props.bids}
                                title={user.firstName + ' ' + user.lastName}
                                type = 'job'
                                status = 'status'
                                // type={this.props.type}
                                // id={this.props.id}
                            />
                        )}
                    </div> 
                )}      
            </div>
        );
    }
}

export default SidebarLink;