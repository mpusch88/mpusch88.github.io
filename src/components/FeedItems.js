import React from 'react';
import FeedItem from './FeedItem';

class FeedItems extends React.Component {
	constructor(props){
        super(props);
	}

	render(){

        // let feedItem = {
        //     _id:1,
        //     _clientId:2,
        //     title:'example title',
        //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     timestamp:1301090400
        // }

        // let client = {            
        //     firstName: 'Name',
        //     location:{
        //         city:'Calgary',
        //         province:{
        //             label:'AB'
        //         }
        //     }
        // }

        // let colNumber = 3;

        return (
            <div className="feed-container">
                <div>
                {(this.props.feed.length > 0) && (
                    <div className="container">
                        <div className="row">
                            {this.props.feed.map((item,key) => {
                                    return (
                                        <div key={key} className="col-12 col-md-6">
                                            <FeedItem 
                                                feedItem={item} 
                                                client={item._clientId}
                                            />
                                        </div>
                                    );
                            })}
                        </div>
                    </div>
                )}
                </div>

            </div>
        );
    }
}

export default FeedItems;