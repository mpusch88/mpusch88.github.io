import React from 'react';
import moment from 'moment';
import ShowMore from './ShowMore';
import GhostButton from './buttons/GhostButton';

class FeedItem extends React.Component {
	constructor(props){
        super(props);

		this.handleGetStarted = this.handleGetStarted.bind(this);
	}
	
	handleGetStarted(){
        this.props.getStarted(this.props.feedItem._id,this.props.feedItem._clientId);
    }

	render(){
        return (
            <div className="feed-item-container">
                <div className="feed-item-header">
                    <span className="feed-header-title feed-header-section">
                        {this.props.feedItem.title}
                    </span>
                    <span className="feed-header-name feed-header-section">
                        {this.props.client.firstName}
                    </span>
                    {(this.props.client.location && this.props.client.location.city && this.props.client.location.province) && (
                        <span className="feed-header-city feed-header-section">
                            {this.props.client.location.city}, {this.props.client.location.province.label}
                        </span>
                    )}
                </div>
                <div className="feed-item-body">
                    <ShowMore 
                        text={this.props.feedItem.description}
                    />
                </div>
                <div className="feed-item-buttons">
                    <span className="feed-item-date">
                        Posted on {moment(this.props.feedItem.timestamp).format('MMM D, YYYY')}
                    </span>
                    <GhostButton onClick={this.handleGetStarted} className="button-big-ghost noselect">Get Started</GhostButton>
                    
                </div>
            </div>
        );
    }
}

export default FeedItem;
